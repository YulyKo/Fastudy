import { Component } from "@angular/core";
import { ViewController, NavParams } from "ionic-angular";

@Component({
  selector: "page-test-result",
  templateUrl: "test-result.html"
})
export class TestResultPage {
  resultData = [];
  resultText = "";
  numXp = 0;
  persentOfRigthQuestions = "";
  constructor(private view: ViewController, private params: NavParams) {}

  ionViewDidLoad() {
    this.setResultData(this.params.data.server, this.params.data.user);
  }
  closeModal() {
    this.view.dismiss();
  }
  private setResultData(server, user) {
    const resultData = [];
    const questionsLength = server.length;
    let userRightQuestions = 0;
    for (let i = 0; i < questionsLength; i++) {
      if (server[i] === user[i]) {
        resultData.push(true);
        userRightQuestions++;
        this.numXp += 5;
      } else {
        resultData.push(false);
      }
    }

    var Uexp;

    if(localStorage.getItem("exp")===null) Uexp=0;
    else Uexp = parseInt(localStorage.getItem("exp"));
    Uexp = Uexp +this.numXp;
    localStorage.setItem("exp",Uexp);


    const persentOfRigthQuestions = Math.round(
      (userRightQuestions / questionsLength) * 100
    );

    if (persentOfRigthQuestions === 100) {
      this.resultText = "Супер!";
    } else if (persentOfRigthQuestions >= 75) {
      this.resultText = "Хорошо! Но можно лучше";
    } else if (persentOfRigthQuestions >= 50) {
      this.resultText = "Так себе...";
    } else {
      this.resultText = "Плохо! Пройди ещё раз";
    }

    this.persentOfRigthQuestions = persentOfRigthQuestions + "%";
    this.resultData = resultData;

  }
}
