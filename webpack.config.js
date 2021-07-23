module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "production",
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: "./lib_ie11/bundle.js",
  // ES5(IE11等)向けの指定
  target: ["web", "es5"],
};
