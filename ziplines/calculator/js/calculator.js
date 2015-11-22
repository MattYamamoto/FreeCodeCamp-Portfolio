$(document).ready(function() {
  var $keyButtons = $('.key-button'),
    $keyText = $('.key-text'),
    $keyAlt1Text = $(".key-alt-text-1"),
    $keyAlt2Text = $(".key-alt-text-2"),
    $screenNum = $('.line-number'),
    $screenContent = $('.content'),
    $display = $('.screen-main-display-container'),
    cancelKey = 'k39',
    inputLine = false,
    inputMode = 'dec',
    cursorPosition = 0,
    defaultLineNums = ["1:", "2:", "3:", "4:", "5:"],
    reDec = new RegExp(/^[+-]{0,1}[\d]*[\.]{0,1}[\d]*$/),
    keyState = 0, //0 is main, 1 is alt1, 2 is alt2
    keyMap = {
      "k0": {
        "main": {
          "text": " ",
          "val": "",
          "func": ""
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k1": {
        "main": {
          "text": " ",
          "val": "",
          "func": ""
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k2": {
        "main": {
          "text": " ",
          "val": "",
          "func": ""
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k3": {
        "main": {
          "text": " ",
          "val": "",
          "func": ""
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k4": {
        "main": {
          "text": " ",
          "val": "",
          "func": ""
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k5": {
        "main": {
          "text": " ",
          "val": "",
          "func": ""
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k6": {
        "main": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt1": {
          "text": "A",
          "val": "A",
          "func": numClick
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k7": {
        "main": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt1": {
          "text": "B",
          "val": "B",
          "func": numClick
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k8": {
        "main": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt1": {
          "text": "C",
          "val": "C",
          "func": numClick
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k9": {
        "main": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt1": {
          "text": "D",
          "val": "D",
          "func": numClick
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k10": {
        "main": {
          "text": "<i class='fa fa-chevron-up'></i>",
          "val": "",
          "func": ""
        },
        "alt1": {
          "text": "E",
          "val": "E",
          "func": numClick
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k11": {
        "main": {
          "text": "Next",
          "val": "",
          "func": ""
        },
        "alt1": {
          "text": "F",
          "val": "F",
          "func": numClick
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k12": {
        "main": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k13": {
        "main": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k14": {
        "main": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k15": {
        "main": {
          "text": "<i class='fa fa-chevron-left'></i>",
          "val": "",
          "func": cursorLeft
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k16": {
        "main": {
          "text": "<i class='fa fa-chevron-down'></i>",
          "val": "",
          "func": ""
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k17": {
        "main": {
          "text": "<i class='fa fa-chevron-right'></i>",
          "val": "",
          "func": cursorRight
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k18": {
        "main": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k19": {
        "main": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k20": {
        "main": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k21": {
        "main": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k22": {
        "main": {
          "text": "DEL",
          "val": "",
          "func": clearStack
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k23": {
        "main": {
          "text": "<i class='fa fa-arrow-left'></i>",
          "val": "",
          "func": delInputChar
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k24": {
        "main": {
          "text": "+/-",
          "val": "",
          "func": toggleSign
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k25": {
        "main": {
          "text": "7",
          "val": 7,
          "func": numClick
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k26": {
        "main": {
          "text": "8",
          "val": 8,
          "func": numClick
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k27": {
        "main": {
          "text": "9",
          "val": 9,
          "func": numClick
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k28": {
        "main": {
          "text": "/",
          "val": "",
          "func": ""
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k29": {
        "main": {
          "text": "<i class='fa fa-reply'></i>",
          "val": "",
          "func": ""
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k30": {
        "main": {
          "text": "4",
          "val": 4,
          "func": numClick
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k31": {
        "main": {
          "text": "5",
          "val": 5,
          "func": numClick
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k32": {
        "main": {
          "text": "6",
          "val": 6,
          "func": numClick
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k33": {
        "main": {
          "text": "*",
          "val": "",
          "func": ""
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k34": {
        "main": {
          "text": "<i class='fa fa-share'></i>",
          "val": "",
          "func": ""
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k35": {
        "main": {
          "text": "1",
          "val": 1,
          "func": numClick
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k36": {
        "main": {
          "text": "2",
          "val": 2,
          "func": numClick
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k37": {
        "main": {
          "text": "3",
          "val": 3,
          "func": numClick
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k38": {
        "main": {
          "text": "-",
          "val": "",
          "func": ""
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k39": {
        "main": {
          "text": "ON",
          "val": "",
          "func": ""
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k40": {
        "main": {
          "text": "0",
          "val": 0,
          "func": numClick
        },
        "alt1": {
          "text": "Test",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "Test2",
          "val": "",
          "func": ""
        }
      },
      "k41": {
        "main": {
          "text": ".",
          "val": "",
          "func": numClick
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k42": {
        "main": {
          "text": "Enter",
          "val": "",
          "func": enterKey
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      },
      "k43": {
        "main": {
          "text": "+",
          "val": "",
          "func": ""
        },
        "alt1": {
          "text": "",
          "val": "",
          "func": ""
        },
        "alt2": {
          "text": "",
          "val": "",
          "func": ""
        }
      }
    },
    screenStack = {
      lineNumbers: defaultLineNums.slice(),
      lineContents: []
    };

  /**
    *
    *Initialization and Setup Functions
    *
  */

  //setKeys function maps text onto appropriate key.
  function setKeys() {
    //set text for each key
    $keyText.each(function(ind) {
      $(this).html(keyMap["k" + ind].main.text || "~k" + ind + "~");
    });

    //set alt1 text for each key
    $keyAlt1Text.each(function(ind) {
      var offset = ind + 6; //compensate for 6 top keys w/o alt text
      $(this).html(keyMap["k" + offset].alt1.text);
    });

    //set alt2 text for each key
    $keyAlt2Text.each(function(ind) {
      var offset = ind + 6; //compensate for 6 top keys w/o alt text
      $(this).html(keyMap["k" + offset].alt2.text);
    });

    //set Cancel key (overrides key's native main func)
    //should be bottom row key or text will interfere
    $('#' + cancelKey).parent().append('<div id="cancel">Cancel</div>');
    keyMap[cancelKey].main.func = clearInputLine;
  }


  /**
    *
    *Screen Functions
    *
  */

  //function returns the content of a given line number.
  //line number corresponds to line number on screen
  //if present, 0 represents input line
  function getLineContents(lineNum) {
    var contents;
    //if input line is present, screenStack.lineContents is indexed correctly
    if(inputLine === true) {
      contents = screenStack.lineContents[lineNum];
    } else {  //if no inptul line, screen line 1 lies at index 0;
      contents = screenStack.lineContents[lineNum - 1] || "";
    }

    return contents;
  }

  function getLineString(lineNum) {
    var str = getLineContents(lineNum);

    return Array.isArray(str) ? str.join("") : str;
  }

  //function returns a copy of the input line with cursor at given position
  function insertCurosr(position) {
    var newLine;

    //verify we're on input line
    if(inputLine === true) {
      //check if input line is array of characters
      if(Array.isArray(screenStack.lineContents[0])) {
        //grab a copy of the input array
        newLine = screenStack.lineContents[0].slice();
      } else { //a string is displayed there, so make it an array.
        newLine = screenStack.lineContents[0].split("");
      }


      //splice in the cursor at the given position
      newLine.splice(position, 0, '<span class="cursor">|</span>');
    }

    return newLine;
  }

  //draw the screen
  function refreshScreen() {
    var nodeText = ['<div class="screen-main-display">'],
      j = 1,
      lineNum,
      content;


    //create html for each line
    for (var i = 4; i >= 0; i--) {
      lineNum = screenStack.lineNumbers[i];

      //check for input line and also verify that this is index 0
      //any other index would be anomalous
      if(inputLine === true && i === 0) {

        //insert the cursor and join the input array to be dispalyed as string
        content = insertCurosr(cursorPosition).join("");

        //opening line div tag needs 'input-line' class
        nodeText[j++] = '<div id="line' + i + '" class="line input-line">';
      } else {

        //grabe content from the screenStack object.
        content = screenStack.lineContents[i];

        //generic opeing line div tag.
        nodeText[j++] = '<div id="line' + i + '" class="line">';
      }

      nodeText[j++] = '<span class="line-number">';
      nodeText[j++] = lineNum;
      nodeText[j++] = '</span>';
      nodeText[j++] = '<span class="content">';
      nodeText[j++] = content;
      nodeText[j++] = '</span>';
      nodeText[j++] = '</div>';
    }

    //close screen-main-dispaly div
    nodeText[j++] = '</div>';

    //replace display with newly created html
    $display.empty().append(nodeText.join(""));

  }

  //Create a new input line
  function openInputLine(char) {
    inputLine = true;
    cursorPosition++;
    //new line is added to front of screenStack
    screenStack.lineNumbers.unshift(""); //has no line number
    screenStack.lineContents.unshift([char.toString()]);
    refreshScreen();
  }

  //Add characters to the input line text
  function concatInputChar(char) {
    screenStack.lineContents[0].splice(cursorPosition, 0, char.toString());
    cursorPosition++;
    refreshScreen();
  }

  //Remove characters from the input line
  function delInputChar() {
    if(cursorPosition > 0) {
      cursorPosition--;
      screenStack.lineContents[0].splice(cursorPosition, 1);
      refreshScreen();
    }
  }

  //Remove the inputLine and return what was there as a string
  function clearInputLine() {
    var input = "";
    //only clear first screenStack entries if current line is
    //an input line.
    if(screenStack.lineNumbers[0] === "") {
      input = screenStack.lineContents[0];
      screenStack.lineNumbers.shift();
      screenStack.lineContents.shift();
      inputLine = false;
      refreshScreen();
    }

    return input.join("");
  }

  function addLineToStack(val) {
    //the next line number value
    var num = screenStack.lineNumbers.length + 1;

    //prepend val to the screenStack.lineContents array
    screenStack.lineContents.unshift(val);

    //if another line number is needed, add it to the line numbers.
    if(screenStack.lineContents.length > screenStack.lineNumbers.length) {
      screenStack.lineNumbers.push(num.toString(10) + ":");
    }
  }


  //Place content at a specific line.
  //0 is input line (which may not be visible)
  //If no input line is present, one will be created
  function placeAtLine(lineNum, val) {
    if(lineNum > 0) {
      screenStack.lineContents.splice(lineNum - 1 , 0, val);
    } else {

    }
  }


  /**
    *Calculation/Operation functions
    *These are assigned to keys in the keyMap object
    *
  */

  //
  //Basic Calculator functionality
  //

  //handle any character that needs to be added to input line
  function numClick(char) {
    //check that we have an input line (a line with no line number)
    //otherwise assume input and concat to what's there
    if (screenStack.lineNumbers[0] !== "") {
      openInputLine(char);
    } else {
      concatInputChar(char);
    }

  }

  //take content and return a string with toggled sign
  function changeSign(lineContent) {
    var array = false;

    //test if lineContent is an Array, convert to string if it is
    if(Array.isArray(lineContent)) {
      lineContent = lineContent.slice().join("");
      array = true;
    }

    //positive number strings get '-' prepended
    //negative number strings get '+' prepended
    if(lineContent.charAt(0) === '+') { //if + make it -
        lineContent = '-' + lineContent.substring(1);
    } else if(lineContent.charAt(0) === '-') { //if - make it +
        lineContent = '+' + lineContent.substring(1);
    } else {  //else number is implied positive, make it -
        lineContent = '-' + lineContent;
        cursorPosition++;
    }

    return array ? lineContent.split("") : lineContent;
  }

  //toggle sign of active line
  function toggleSign() {
    //replace first line of screen with signed version
    screenStack.lineContents[0] = changeSign(getLineContents(0));
    refreshScreen();
  }

  //validate the syntax of string number for a give mode.
  //  mode: 'dec', 'bin', 'hex'
  function validateSyntax(str, mode) {

    switch(mode) {
      case 'dec':
        return reDec.test(str);
    }

  }

  function enterKey() {
    var val = "";

    if(inputLine === true) {
      val = getLineString(0);
      if(validateSyntax(val, inputMode)) {
        addLineToStack(clearInputLine());
      } else {
        console.log('Error');
      }

    } else {
      val = screenStack.lineContents[0];
      placeAtLine(1, val);
    }

    refreshScreen();
  }

  //Clear the screen stack and reset the line numbers
  function clearStack() {
    //enforce clearing of stack only when input line not present.
    if(inputLine === false) {
      screenStack.lineContents = [];
      screenStack.lineNumbers = defaultLineNums.slice();
      refreshScreen();
    }
  }

  function cursorLeft() {
    if(cursorPosition > 0 && inputLine === true) {
      cursorPosition--;
      refreshScreen();
    }
  }

  function cursorRight() {
    if(cursorPosition < screenStack.lineContents[0].length &&
       inputLine === true) {
      cursorPosition++;
      refreshScreen();
    }
  }


  /**
    *
    *Event bindings
    *
  */

  $keyButtons.click(function() {
    var key = $(this).attr('id'),
        func = keyMap[key].main.func;
    if(func) {
      func(keyMap[key].main.text);
    }
  });


  /**
    *
    *Lets' Go!: Initialize the calculator
    *
  */
  (function initialize() {
    setKeys();
    refreshScreen();
  })();


});
