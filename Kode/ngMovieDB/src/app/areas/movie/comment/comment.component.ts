import { CommentModel } from "./models/comment";
import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "../../user/services/user.service";
import { UserModel } from "../../user/models/user";

@Component({
  selector: "comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.css"]
})
export class CommentComponent implements OnInit {
  @Input()
  comment: CommentModel;
  user: UserModel;

  constructor(private userService: UserService) {}

  ngOnInit() {}

  getUser(userId) {
    return this.userService.getUserById(userId);
  }

}
