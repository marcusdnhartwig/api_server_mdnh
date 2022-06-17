'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('food', {
    food: {
      type: DataTypes.ENUM,
      yumyum: ['grub', 'souuuup', 'dim sum'],
      allowNull: true,
    },
  });
};
