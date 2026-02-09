// Regular expressions: Used to describe and select patterns inside of string data

// [ used to include ] , [^ select except ] ,
/*( capturing group ), [ character set ], A-Z range, ([A-Z]) this matches characters ranging from A to Z
^ Start of string
(?=[^A-Z\n]*[A-Z]) Positive lookahead, assert 0+ times any char except A-Z or a newline. Then match a char A-Z
(?=[^a-z\n]*[a-z]) The same approach for a char a-z
(?=[^0-9\n]*[0-9]) The same approach for a digit 0-9
(?=[^#?!@$%^&*\n-]*[#?!@$%^&*-]) The same approach for a char that you would consider special
.{8,} Match 8 or more times any character except a newline
$ End of string

A dot can also match a space. If you do not want to allow matching a space, then .{8,} can be changed to \S{8,} to match 8 or more non whitespace characters
Using either . or \S can match more characters than are specified in the lookahead assertions. If you only want to match the characters that are used in the assertions, you can change .{8,} to match only the allowed characters [#?!@$%^&*A-Za-z0-9-]{8,} using a character class


*/

// Source - https://stackoverflow.com/a/70338667
// Posted by The fourth bird
// Retrieved 2026-01-30, License - CC BY-SA 4.0

const regex = /^(?=[^A-Z\n]*[A-Z])(?=[^a-z\n]*[a-z])(?=[^0-9\n]*[0-9])(?=[^#?!@$%^&*\n-]*[#?!@$%^&*-]).{8,}$/;
[
  "abcA1#!A",
  "#!asdfSFD1;",
  "# a f F1 ;",
  "1111111111",
  "aaaaaaaa",
  "11111111",
  "AAAAAAAA",
  "########",
  "aA1#"
].forEach(s =>
  console.log(regex.test(s) ? `Match --> ${s}` : `No match --> ${s}`)
);