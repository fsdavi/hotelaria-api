// import { Model, DataTypes } from "sequelize";
// import { sequelize } from "../database";

// interface RoomAttributes {
//   id: number;
//   name: string;
//   price: number;
//   capacity: number;
// }

// class Room extends Model<RoomAttributes> implements RoomAttributes {
//   public id!: number;
//   public name!: string;
//   public price!: number;
//   public capacity!: number;

//   // Métodos "static" não podem ser declarados no Model, então é preciso definir separadamente
//   public static async findAllRooms(): Promise<Room[]> {
//     return Room.findAll();
//   }

//   public static async findRoomById(id: number): Promise<Room | null> {
//     return Room.findByPk(id);
//   }

//   public static async createRoom(room: RoomAttributes): Promise<Room> {
//     return Room.create(room);
//   }

//   public static async updateRoomById(
//     id: number,
//     room: RoomAttributes
//   ): Promise<[number, Room[]]> {
//     return Room.update(room, {
//       where: { id },
//       room
//     });
//   }

//   public static async deleteRoomById(id: number): Promise<number> {
//     return Room.destroy({
//       where: { id },
//     });
//   }
// }

// Room.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     price: {
//       type: DataTypes.FLOAT,
//       allowNull: false,
//     },
//     capacity: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//   },
//   {
//     tableName: "rooms",
//     sequelize,
//   }
// );

// export default Room;
