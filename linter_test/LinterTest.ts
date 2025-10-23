namespace LinterTest {

  interface Info {
    text: string, key: KEY
  }
  enum KEY {
    POS = 1, NEG = -1
  }

  const info: Info = { text: "G`udetmvhsgBncd1 ", key: KEY.POS };
  console.log(DeCrypt(info.text, info.key));

  function DeCrypt(_text: string, _key: number): string {
    let result: string = "";
    for (let i: number = 0; i <_text.length; i ++){
      result += String.fromCharCode(_text.charCodeAt(i) + _key)
    }
    return result;
  }  

}