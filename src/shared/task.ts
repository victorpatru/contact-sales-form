import { Entity, Fields } from "remult";

@Entity("tasks", {
  allowApiCrud: true,
})
export class Task {
  @Fields.autoIncrement()
  id = 0;

  @Fields.string()
  firstName = "";

  @Fields.string()
  lastName = "";

  @Fields.string()
  email = "";

  @Fields.string()
  message = "";

  @Fields.string()
  company = "";

  @Fields.string()
  phoneNumber = "";
}
