const b = Buffer.from("abc");
console.log(b, b.toJSON());

const c = Buffer.alloc(15);
console.log(c, c.toString() + "<---");
c.write("surya");
console.log(c, c.toString() + "<---");

const d = Buffer.from((45).toString(2));
console.log((45).toString(2), d, d.values());

const e = Buffer.alloc(12);
// e.writeInt8(234234) //err: The value of "value" is out of range. It must be >= -128 and <= 127. Received 234234
e.writeInt8(-127);
// Buffer.concat([e,Buffer.from("126")]) does not do anything
// e.write("surya")//overwrites above value
// console.log(e.entries(),e.keys())
for (let i of e.entries()) {
  console.log(i);
}
console.log(e.length,e, e.toString());
