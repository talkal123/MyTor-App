import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdOutlinePhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const BusinessById = () => {
  const date = new Date();
  const dateString = date.toDateString();
  const today = date.toISOString().split("T")[0];

  const withoutYear = dateString.split(" ").slice(0, 3).join(" ");

  const [time, setTime] = useState(today);
  const [businessData, setBusinessData] = useState([]);
  const [businessAppointment, setBusinessAppointment] = useState([]);
  const [appointment, setAppointment] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [service, setService] = useState("");

  const arr = [
    {
      icon: <MdOutlinePhone className="w-5 h-5" />,
      name: businessData.phone,
    },
    {
      icon: <CiLocationOn className="w-5 h-5" />,
      name: businessData.address,
    },
    {
      icon: <CiMail className="w-5 h-5" />,
      name: businessData.email,
    },
    {
      icon: <CiClock2 className="w-5 h-5" />,
      name: "Closes in 1h 47m",
    },
  ];

  const { id } = useParams();

  console.log(businessData);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/business/${id}`)
        .then((response) => {
          setBusinessData(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/appointment/business/${id}`)
        .then((response) => {
          setBusinessAppointment(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  const changeAppointment = async (item) => {
    try {
      if (nameValue.trim() === "") {
        alert("Name required");
        return;
      }

      const newObject = { ...item, clientName: nameValue };
      const response = await axios.put(
        `http://localhost:3000/appointment/${item._id}`,
        newObject
      );

      setBusinessAppointment((prev) =>
        prev.map((appt) => (appt._id === item._id ? response.data : appt))
      );
      setOpen(true);
      console.log("Appointment updated:", response.data);
    } catch (error) {
      console.error("Error updating appointment:", error);
    }
  };

  const filteredAppointments = businessAppointment
    .filter((a) => a.clientName === null && a.date.split("T")[0] === time)
    .sort((a, b) => a.time.localeCompare(b.time));

  return (
    <div className="flex justify-center bg-gray-200">
      <div className="max-w-[1100px] w-full p-5">
        <div className="border p-5 rounded-lg bg-white h-full">
          <div className="flex flex-col md:flex-row justify-between h-full">
            <div className="pr-10 pl-10 w-full">
              <div className=" border-b-1 pt-5 pb-5">
                <h2 className="font-bold text-xl">Book Your Appointment</h2>
              </div>
              <div className=" border-b-1 pt-5 pb-5 flex gap-5 items-center">
                <div>
                  <img
                    src={businessData?.images?.[1]}
                    className="w-20 h-20 rounded-lg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="font-bold text-lg">
                      {businessData?.services?.map((item) => item.name, () => setService(item.name))}
                    </h3>
                  </div>
                  <div className="flex gap-1">
                    <h3 className="font-semibold">
                      ${businessData?.services?.map((item) => item.price)}
                    </h3>
                    <span className="text-center">•</span>
                    <span className="text-gray-300">
                      {businessData?.services?.map((item) => item.serviceTime)}{" "}
                      minutes
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-5 flex flex-col gap-8">
                <div>
                  <p className="font-bold text-lg">{withoutYear}</p>
                </div>
                <div>
                  <input
                    onChange={(e) => setTime(e.target.value)}
                    type="date"
                    name=""
                    id=""
                    value={time}
                  />
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 p-5 pt-10 pb-10">
                {filteredAppointments.length === 0 ? (
                  <p>Empty Appointments.</p>
                ) : (
                  <div className="flex flex-wrap gap-2 items-center justify-center">
                    {filteredAppointments
                      .filter(
                        (a) =>
                          a.clientName === null && a.date.split("T")[0] === time
                      )
                      .sort((a, b) => a.time.localeCompare(b.time))
                      .map((item, index) => (
                        <AlertDialog key={index}>
                          <AlertDialogTrigger asChild>
                            <div
                              style={{
                                backgroundColor:
                                  item.time === appointment
                                    ? "#1E90FF"
                                    : "white",
                                color:
                                  item.time === appointment ? "white" : "black",
                              }}
                              className="border cursor-pointer w-20 h-20 rounded-lg flex items-center justify-center"
                              onClick={() => setAppointment(item.time)}
                            >
                              {item.time}
                            </div>
                          </AlertDialogTrigger>

                          <AlertDialogContent className="p-0">
                            <AlertDialogHeader className="relative">
                              <div className="absolute top-0 right-0">
                                <AlertDialogAction className="border bg-white hover:bg-gray-200 cursor-pointer text-black rounded-full">
                                  X
                                </AlertDialogAction>
                              </div>
                              <AlertDialogTitle className="p-5">
                                Determine in {item.time} || Type: {businessData?.services?.map((item) => item.name )}
                              </AlertDialogTitle>
                              <AlertDialogDescription className="p-5">
                                <div className="flex flex-col gap-4">
                                  <h3 className="text-xl font-semibold">
                                    Enter your details
                                  </h3>
                                  <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={nameValue}
                                    onChange={(e) =>
                                      setNameValue(e.target.value)
                                    }
                                    className="border p-2 rounded-lg w-full"
                                  />
                                </div>
                              </AlertDialogDescription>
                            </AlertDialogHeader>

                            <AlertDialogFooter className="p-5 w-full">
                            {nameValue !== "" ? (
                              <AlertDialogCancel
                                className="bg-black text-white pt-5.5 pb-5.5 rounded-lg text-lg font-semibold w-full cursor-pointer"
                                onClick={() => changeAppointment(item)}
                              >
                                Determine
                              </AlertDialogCancel>
                              ):(
                              <button className="bg-gray-300 text-white p-2 pt-2 pb-2 text-lg rounded-lg font-semibold w-full">Determine</button>
                              )}
                              
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      ))}
                  </div>
                )}
              </div>
            </div>
            <div className="border rounded-lg relative">
              <div className="">
                <img
                  src={businessData?.images?.[1]}
                  className="max-h-[150px] w-full object-cover object-center rounded-t-lg"
                  alt=""
                />
              </div>
              <div className="bg-gray-300 rounded-full w-20 h-20 absolute top-25 left-10 overflow-hidden">
                <img
                  src={businessData?.images?.[0]}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>

              <div className="p-10 pt-20 flex flex-col gap-10 border">
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl font-bold">
                    {businessData?.businessName}
                  </h1>
                  <span className="">{businessData?.description}</span>
                </div>
                <div className="flex flex-col gap-5">
                  {arr.map((item, index) => (
                    <div key={index} className=" flex gap-5 items-center">
                      <div>
                        <p className="text-blue-600">{item.icon}</p>
                      </div>
                      <div>
                        <span className=" font-semibold">{item.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessById;
