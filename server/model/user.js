const Sequelize = require("sequelize");
const Event = require("../model/event");
const Invitation = require("../model/invitation");
const Wishlist = require("../model/wishlist");
const Discovery = require("./discovery");
const Order = require("./order");
const Payment = require("./payment");
const Courseprogress = require("./courseprogress");
require("../database/dbconfig");

const User = sequelize.define(
  "user",
  {
    id: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "First Name cannot be empty.",
        },
        isAlpha: {
          args: true,
          msg: "First Name must only contain letters",
        },
      },
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Last Name cannot be empty.  ",
        },
        isAlpha: {
          args: true,
          msg: "Last Name must only contain letters",
        },
      },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg:
          "The email address you entered is already registered. Please try a new one",
      },
      validate: {
        notEmpty: {
          args: true,
          msg: "Email is required. Please complete this field to continue ",
        },
        isEmail: {
          args: true,
          msg: "Email address is invalid",
        },
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8, 255],
          msg: "Password must be at least 8 characters long",
        },
      },
    },
    mobile: {
      type: Sequelize.STRING,
    },
    is_student: {
      type: Sequelize.STRING,
    },
    is_coach: {
      type: Sequelize.STRING,
    },
    is_admin: {
      type: Sequelize.STRING,
    },
    linkedin: {
      type: Sequelize.STRING,
      validate: {
        isUrl: {
          args: true,
          msg: "Please enter a valid linkedin url",
        },
      },
    },
    url: {
      type: Sequelize.STRING,
      validate: {
        isUrl: {
          args: true,
          msg: "Please enter a valid url",
        },
      },
    },
    address: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
    },
    state: {
      type: Sequelize.STRING,
    },
    pincode: {
      type: Sequelize.STRING,
    },
    registration_date: {
      type: Sequelize.DATE,
      validate: {
        isDate: {
          args: true,
          msg: "Please enter a valid date",
        },
      },
    },
    active: {
      type: Sequelize.STRING,
    },
    activation_code: {
      type: Sequelize.STRING,
    },
    expiration: {
      type: Sequelize.DATE,
    },
  },

  {
    timestamps: false,
    tableName: "user",
  }
);

// Association Between EVENT Table and USER Table
User.hasMany(Event, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: {
    name: "coach_user_id",
    type: Sequelize.BIGINT(20),
    allowNull: false,
  },
});

Event.belongsTo(User, {
  foreignKey: {
    name: "coach_user_id",
  },
});

// Association Between CART Table and USER Table
User.hasMany(Wishlist, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: {
    name: "user_id",
    type: Sequelize.BIGINT(20),
    allowNull: false,
  },
});

Wishlist.belongsTo(User, {
  foreignKey: {
    name: "user_id",
  },
});

// Association Between INVITATION Table and USER Table
User.hasMany(Invitation, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: {
    name: "coach_user_id",
    type: Sequelize.BIGINT(20),
    allowNull: false,
  },
});

Invitation.belongsTo(User, {
  foreignKey: {
    name: "coach_user_id",
  },
});

// Association Between INVITATION Table and USER Table
User.hasMany(Invitation, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: {
    name: "student_user_id",
    type: Sequelize.BIGINT(20),
    allowNull: false,
  },
});

Invitation.belongsTo(User, {
  foreignKey: {
    name: "student_user_id",
  },
});

// Association between User Table and Discovery table as (user_id) is foreign key in discovery table
User.hasMany(Discovery, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: {
    name: "user_id",
    type: Sequelize.BIGINT(20),
    allowNull: false,
  },
});

Discovery.belongsTo(User, {
  foreignKey: {
    name: "user_id",
  },
});

User.hasMany(Courseprogress, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: {
    name: "user_id",
    type: Sequelize.BIGINT(20),
    allowNull: false,
  },
});

Courseprogress.belongsTo(User, {
  foreignKey: {
    name: "user_id",
  },
});

User.hasMany(Order, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: {
    name: "user_id",
    type: Sequelize.BIGINT(20),
    allowNull: false,
  },
});

Order.belongsTo(User, {
  foreignKey: {
    name: "user_id",
  },
});

User.hasMany(Payment, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  foreignKey: {
    name: "user_id",
    type: Sequelize.BIGINT(20),
    allowNull: false,
  },
});

Payment.belongsTo(User, {
  foreignKey: {
    name: "user_id",
  },
});

module.exports = User;
