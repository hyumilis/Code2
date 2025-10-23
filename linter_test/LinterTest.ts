namespace LinterTest {

  interface Info {
    text: string, key: KEY
  }
  enum KEY {
    POS = 1, NEG = -1
  }

  const info: Info = { text: "G`udetmvhsgBncd1 ", key: KEY.POS };
  console.log(DECRYPT(info.text, info.key));

  function DECRYPT(_text: string, _key: number): string {
    let result: string = "";
    for (let i: number = 0; i <_text.length; i ++);
      result += String.fromCharCode(_text.charCodeAt(0) + _key)
    return result;
  }  

}