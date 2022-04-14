// スプレッドシートから最終行まで取得
function sample1(){
  const ID_COL = 1;
  const NAME_COL = 2;
  const START_ROW = 2;

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var test = ss.getSheetByName("test");

  for(var i=START_ROW; i<=test.getLastRow(); i++){
    Logger.log(test.getRange(i, ID_COL).getValue());
    Logger.log(test.getRange(i, NAME_COL).getValue());
  }
}

// カレンダー情報を取得
function sample2(){
  var calendar = CalendarApp.getCalendarById("カレンダーID");
  var events = calendar.getEvents(new Date("2022/4/14 00:00"), new Date("2022/4/14 23:59"));
  Logger.log(events[0].getTitle());
}

// ソート
function sample3(){
  numbers = [2,5,7,8,1,4,3,9,6];

  //昇順ソート
  numbers.sort((a, b) => {return a - b;});
  Logger.log(numbers);

  //降順ソート
  numbers.sort((a, b) => {return b - a;});
  Logger.log(numbers);
}

// スプレッドシートの行揃え
function sample4(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var test = ss.getSheetByName("test");

  //内容問わず強制的に揃えたい時はForcedを利用。
  test.setRowHeightsForced(1,1000,20);
}

// ハッシュ（連想配列）
function sample5(){
  array = {"パラメタ1": "aaa", "パラメタ2": "bbb"};
  Logger.log(array["パラメタ1"]);
  Logger.log(array["パラメタ2"]);
}

// スプレッドシートのメニューに追加
function onOpen(){
  var ui = SpreadsheetApp.getUi()
  var menu = ui.createMenu("追加メニュー");
  menu.addItem("実行","exec");
  menu.addItem("クリア","clear");

  //これがないと追加されないので注意
  menu.addToUi();
}
