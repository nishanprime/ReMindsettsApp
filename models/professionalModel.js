// import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';
// const professionalSchema = new mongoose.Schema({
//   firstName: {
//     type: String,
//     required: true,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   phone: {
//     type: Number,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   gender: {
//     type: String,
//     required: true,
//   },
//   insured: {
//     type: Boolean,
//     required: true,
//   },
//   bio: {
//     type: String,
//   },
//   expertise: {
//     type: String,
//   },
//   businessName: {
//     type: String,
//   },
//   membership: {
//     type: String,
//   },
//   intro: {
//     type: String,
//     required: true,
//   },
//   payment: {
//     type: String,
//     required: true,
//   },
// });

// //do not use arrow function here since on doing so
// //the value of this.password would be different
// professionalSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) {
//     next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

// professionalSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };
// const Professional = mongoose.model('Professional', professionalSchema);

// export default Professional;
