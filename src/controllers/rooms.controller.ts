import { Request, Response } from 'express';

interface Room {
  id: number;
  roomNumber: number;
  price: number;
  maxGuests: number;
  bookedDates: string[];
}

let rooms: Room[] = [
  {
    id: 1,
    roomNumber: 101,
    price: 200,
    maxGuests: 2,
    bookedDates: ['2022-05-01', '2022-05-02']
  },
  {
    id: 2,
    roomNumber: 102,
    price: 300,
    maxGuests: 3,
    bookedDates: ['2022-05-10']
  },
  {
    id: 3,
    roomNumber: 201,
    price: 400,
    maxGuests: 4,
    bookedDates: []
  }
];

const createRoom = (req: Request, res: Response) => {
  const { roomNumber, price, maxGuests } = req.body;

  const newRoom: Room = {
    id: rooms.length + 1,
    roomNumber,
    price,
    maxGuests,
    bookedDates: []
  };

  rooms.push(newRoom);

  res.status(201).json({
    message: 'Quarto criado com sucesso',
    room: newRoom
  });
};

const getAllRooms = (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Quartos encontrados com sucesso',
    rooms
  });
};

const getRoomById = (req: Request, res: Response) => {
  const roomId = Number(req.params.id);
  const room = rooms.find((room) => room.id === roomId);

  if (!room) {
    res.status(404).json({
      message: 'Quarto não encontrado'
    });
  } else {
    res.status(200).json({
      message: 'Quarto encontrado com sucesso',
      room
    });
  }
};

const updateRoom = (req: Request, res: Response) => {
  const roomId = Number(req.params.id);
  const { roomNumber, price, maxGuests } = req.body;

  const roomIndex = rooms.findIndex((room) => room.id === roomId);

  if (roomIndex === -1) {
    res.status(404).json({
      message: 'Quarto não encontrado'
    });
  } else {
    const updatedRoom: Room = {
      ...rooms[roomIndex],
      roomNumber,
      price,
      maxGuests
    };

    rooms[roomIndex] = updatedRoom;

    res.status(200).json({
      message: 'Quarto atualizado com sucesso',
      room: updatedRoom
    });
  }
};

const deleteRoom = (req: Request, res: Response) => {
  const roomId = Number(req.params.id);

  const roomIndex = rooms.findIndex((room) => room.id === roomId);

  if (roomIndex === -1) {
    res.status(404).json({
      message: 'Quarto não encontrado'
    });
  } else {
    const deletedRoom = rooms[roomIndex];

    rooms.splice(roomIndex, 1);

    res.status(200).json({
      message: 'Quarto excluído com sucesso',
      room: deletedRoom
    });
  }
};

export const RoomsController = {
  createRoom,
  getAllRooms,
  getRoomById,
  updateRoom,
  deleteRoom
};