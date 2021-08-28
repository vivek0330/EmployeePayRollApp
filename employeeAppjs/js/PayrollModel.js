class PayrollModel {
  // getter and setter
  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }

  get name() {
    return this._name;
  }
  set name(name) {
    let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
    if (nameRegex.test(name)) this._name = name;
    else {
      throw "Name is Incorrect";
    }
  }
  get profile() {
    return this._profile;
  }
  set profile(profile) {
    this._profile = profile;
  }
  get gender() {
    return this._gender;
  }
  set gender(gender) {
    this._gender = gender;
  }
  get department() {
    return this._department;
  }
  set department(department) {
    this._department = department;
  }
  get salary() {
    return this._salary;
  }
  set salary(salary) {
    this._salary = salary;
  }

  get note() {
    return this._notes;
  }
  set note(note) {
    this._note = note;
  }

  get startDate() {
    return this._startDate;
  }
  set startDate(startDate) {
    this._startDate = startDate;
  }

  toString() {
    return (
      "id = " +
      this.id +
      ", name = " +
      this.name +
      ", gender = " +
      this.gender +
      ", profile picture = " +
      this.profilePic +
      ", department = " +
      this.department +
      ", salary = " +
      this.salary +
      ", startDate = " +
      this.startDate +
      ", note = " +
      this.note
    );
  }
}
