import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../../database";
import { Quarto, TipoQuarto, Avaria } from '../types'

class QuartoModel extends Model<Quarto> implements Quarto {
 public id!: string;
 public status!: number;
 public numero!: number;
 public imageName!: string;
 public avarias!: Avaria[];
 public idTipoQuarto!: TipoQuarto;
}

QuartoModel.init(
 {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  numero: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  imageName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avarias: {
    type: DataTypes.JSONB,
    allowNull: true,
  },
  idTipoQuarto: {
    type: DataTypes.JSON,
    allowNull: false,
  },
},
 {
   sequelize,
   tableName: 'quartos',
   timestamps: true,
   underscored: true,
 }
);

export { QuartoModel };