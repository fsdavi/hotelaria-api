import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../../database';

class UsuarioModel extends Model {
  public id!: string;
  public nome!: string;
  public email!: string;
  public password!: string;
  public cpf!: string;
  public telefone!: string;
  public idEndereco!: number[];
  public type!: number;
}

UsuarioModel.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idEndereco: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    tableName: 'usuarios',
    sequelize,
    timestamps: true,
    underscored: true,
  },
);

export { UsuarioModel };
