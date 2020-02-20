//	开发者模式下调试脚本时,有 3 种方式来暂停一个脚本
//	(1) 手动打一个断点

function hello(name) {
  let phrase = `Hello, ${name}!`;

  say(phrase);

  debugger; // (2) 自动暂停

  say("--- cause a default ---");

  // f(); // (3) 发生错误时启用自动暂停

  say("hello end!");
}

function say(phrase) {
  print(`** ${phrase} **`);
  print("say end!");
}

// 在一个其他的选项卡中按下 Esc：这会在下面打开一个控制台
function print(msg) {
  console.log(msg);
}
