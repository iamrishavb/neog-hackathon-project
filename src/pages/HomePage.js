import { useState } from "react";
import { RoomCard } from "../components";
import { CreateRoomForm, EndRoom } from "../components";
import { db, auth } from "../firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';



const HomePage = () => {

const dummyRoom = {
  roomName: "Test Room",
  host: "Rishav",
  speakers: [
    {
      name: "Danish",
      img:
        "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    },
    {
      name: "Ritika",
      img:
        "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    },
    {
      name: "Rishav",
      img:
        "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    }
  ],
  chats: [
    {
      userId: 1,
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      userProfileImg:
        "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      userName: "Chhota Bheem",
    },
    {
      userId: 2,
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      userProfileImg:
        "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      userName: "Chhota Bheem",
    },
    {
      userId: 3,
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      userProfileImg:
        "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      userName: "Chhota Bheem",
    },
    {
      userId: 4,
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.text of the printing and typesetting industry",
      userProfileImg:
        "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      userName: "Chhota Bheem",
    },
    {
      userId: 5,
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry",
      userProfileImg:
        "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      userName: "Chhota Bheem",
    },
    {
      userId: 6,
      text: "Lorem Ipsum is",
      userProfileImg:
        "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      userName: "Chhota Bheem",
    },
  ],
  participants: 8
};

const dummyRooms = [dummyRoom, dummyRoom, dummyRoom];

const TotalSpeakers = dummyRoom.speakers.length;

  const [formDisplay, setFormDisplay] = useState("none");
  const [endDisplay, setEndDisplay] = useState("none");

  const chatRoomRef = db.collection('chatRooms');
  const query = chatRoomRef.orderBy('startTime');
  const [chatRooms] = useCollectionData(query, { idField: 'id' })

  // console.log(chatRooms);



  return (
    <div className="">
      <CreateRoomForm
        formDisplay={formDisplay}
        setFormDisplay={setFormDisplay}
      />
      <EndRoom endDisplay={endDisplay} setEndDisplay={setEndDisplay} />
      <div className="flex justify-between items-center">
        <img
          src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="host"
          className="h-12 w-12 object-cover rounded-2xl"
        />
        <button onClick={() => setFormDisplay("block")} className="px-4 py-1 bg-blue-500 rounded-2xl my-6 text-white">
          Create Room
        </button>
        <button
          onClick={() => setEndDisplay("block")}
          className="px-4 py-1 bg-blue-500 rounded-md my-6"
        >
          End Chat
        </button>
      </div>
      <div className="mt-4">
        <h1 className="font-bold my-6">Active Rooms</h1>
        {chatRooms && chatRooms.map((item, index) => (
          <RoomCard
            room={item}
            key={index}
            TotalSpeakers={TotalSpeakers}
            // onClick={(item) => addParticipantClickHandler( item.participants)}
            
          />
        ))}
        
      </div>
    </div>
  );
};

export default HomePage;
