const html = `
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>切れ味計算</title>
</head>
<body>
  <h1>切れ味計算</h1>
  <form name="calc">
    <input type="number" id="atk" placeholer="攻撃力" required />
    <select name="kireaji">
      <option value="0.5">赤 (0.5)</option>
      <option value="0.75">橙 (0.75)</option>
      <option value="1.0">黄 (1.0)</option>
      <option value="1.05">緑 (1.05)</option>
      <option value="1.2">青 (1.2)</option>
      <option value="1.32">白 (1.32)</option>
      <option value="1.45">紫 (1.45)</option>
    </select>
  </form>
  <button id="submit">計算</button>
  <p>結果: <span id="result"></span></p>
  <hr>
  <p>参考: <a target="blank" href="https://bassy-mh.info/syuryoukihon-damegekeisan-kensi.html">https://bassy-mh.info/syuryoukihon-damegekeisan-kensi.html</a></p>
  <p>リポジトリ: <a target="blank" href="https://github.com/s2terminal/cloudflare-workers-kireaji">https://github.com/s2terminal/cloudflare-workers-kireaji</a></p>
  <script>
    const form = document.calc;
    const button = document.getElementById('submit');
    button.addEventListener('click', function() {
      const result = form.atk.value * form.kireaji.value;
      const resultArea = document.getElementById('result').innerText = result;
    });
  </script>
</body>
`

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  })
}
