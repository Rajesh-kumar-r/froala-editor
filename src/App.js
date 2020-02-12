import React, { Component } from "react";
import FroalaEditor from "react-froala-wysiwyg";
import Froalaeditor from "froala-editor";
// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
// Require Editor JS files.
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/js/plugins.pkgd.min.js";

let replyEditor = "";
export default function App(props) {
    return (
      <div className="App">
        <h1>Hello Froala</h1>
        <FroalaEditor
          config={{
            enter: Froalaeditor.ENTER_BR,
            tableStyles: {
              "no-border": "No border"
            },
            useClasses: false,
            attribution: false,
            toolbarSticky: false,
            charCounterCount: false,
            fontFamilySelection: true,
            fontSizeSelection: true,
            paragraphFormatSelection: true,
            heightMin: 200,
            heightMax: 550,
            linkInsertButtons: [],
            toolbarButtons: [
              "bold",
              "italic",
              "underline",
              "strikeThrough",
              "subscript",
              "superscript",
              "fontFamily",
              "fontSize",
              "textColor",
              "paragraphFormat",
              "lineHeight",
              "align",
              "formatOL",
              "formatUL",
              "outdent",
              "indent",
              "leftToRight",
              "rightToLeft",
              "insertLink",
              "insertImage",
              "insertTable",
              "emoticons",
              "personalize",
              "insertButton",
              "clearFormatting",
              "selectAll",
              "insertHR",
              "undo",
              "redo",
              "fullscreen",
              "html"
            ],
            linkList: [],
            events: {
              initialized: function() {
                replyEditor = this;
              },
              blur: () => {
                console.log(replyEditor.html.get(true));
              }
            }
          }}
          model={'hi'}
        />
        <button
          onClick={() => {
            replyEditor.html.insert(
              `<p style="text-align:center !important;margin:20px 0 !important;"><a href="http://www.test.com" style="word-break: break-word;display:inline-block !important;background-color:#f00 !important;color:#ffffff !important; font-weight:bold !important; font-size:${16}px !important; text-decoration:none !important; padding:${10}px ${10}px !important; border-radius:${5}px !important; -moz-border-radius:${5}px !important; -webkit-border-radius:5px !important; -khtml-border-radius:5px !important;" target="_blank">test</a></p>`
            );
          }}
        >
          Insert html in editor
        </button>
        <div className={"model-otuput"}>
          <h2>Output code:</h2>
          {/*<span>{this.state.model}</span>*/}
          <h2>Output</h2>
          {/*<span*/}
          {/*  dangerouslySetInnerHTML={{*/}
          {/*    __html: this.state.model*/}
          {/*  }}*/}
          {/*/>*/}
        </div>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }