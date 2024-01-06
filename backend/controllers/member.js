const Member = require("../models/Members");

/*
 * For Admin Panel
 */
const getAllMembers = async (req, res) => {
  try {
    const allMembers = await Member.find().sort({ createdAt: -1 });
    res.render("members/list", { result: allMembers });
  } catch (err) {
    console.log(err);
  }
};

const createMember = async (req, res) => {
  const {
    id,
    name,
    email,
    position,
    shortDescription,
    image,
    whatsAppNumber,
    facebookId,
    instagramId,
    linkedinId,
  } = req.body;
  try {
    if (id) {
      const member = await Member.findById(id);
      member.name = name;
      member.email = email;
      member.position = position;
      member.shortDescription = shortDescription;
      member.image = image;
      member.whatsAppNumber = whatsAppNumber;
      member.facebookId = facebookId;
      member.instagramId = instagramId;
      member.linkedinId = linkedinId;
      await member.save();
      res.redirect("/admin/member");
    } else {
      const newMember = new Member({
        name,
        email,
        position,
        shortDescription,
        image,
        whatsAppNumber,
        facebookId,
        instagramId,
        linkedinId,
      });
      await newMember.save();
      res.redirect("/admin/member");
    }
  } catch (err) {
    console.log(err);
  }
};

const viewAddPage = async (req, res) => {
  res.render("members/addEdit", { data: [] });
};

const viewEditPage = async (req, res) => {
  const { id } = req.params;
  const member = await Member.findById(id);
  console.log("member===>", member);
  res.render("members/addEdit", { data: member });
};

const deleteMember = async (req, res) => {
  const { id } = req.params;
  try {
    await Member.findByIdAndDelete(id);
    res.redirect("/admin/member");
  } catch (error) {
    console.log(error);
  }
};

/*
 * For API
 */
const allMembers = async (req, res) => {
  try {
    const allMembers = await Member.find();
    res.status(200).json(allMembers);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllMembers,
  createMember,
  viewAddPage,
  viewEditPage,
  deleteMember,
  allMembers,
};
