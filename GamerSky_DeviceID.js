function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16).toUpperCase());
}

var body = $request.body;
var obj = JSON.parse(body);

obj['deviceId'] = uuidv4();
obj['deviceType'] = 'iPhone14,5';

modifiedBody = JSON.stringify(obj);

$done({body: modifiedBody});
