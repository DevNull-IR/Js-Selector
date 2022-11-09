class JsSelector {
    /**
     *
     * @param Selector
     */
    constructor(Selector) {
        this.Selection = document.querySelectorAll(Selector);
        this.Str_selector = Selector;
        this.attr_is = false;
        this.event;
        this.Attributes = [];
        this.stat = false;
    }

    /**
     *
     * @param Method
     * @param CallbackFn
     * @param Attr
     */

    addEventListener(Method, CallbackFn){
        this.Selection = new JsSelector(this.Str_selector)

        this.Selection.forEach((i) => {
            i.addEventListener(Method, CallbackFn);
        })
        this.Selection = new JsSelector(this.Str_selector).Selection;
    }

    /**
     *
     * @param CallbackFn
     * @param Attr
     * @constructor
     */
    Onclick(CallbackFn, ...Attr){

        this.Selection = new JsSelector(this.Str_selector).Selection;

        document.onclick = (e) => {
            this.Selection = new JsSelector(this.Str_selector).Selection;

            this.Selection.forEach((i) => {
                if (i === e.path[0]) {
                    if (Attr.length !== 0){
                        Attr.forEach((attrB) => {
                            this.stat = this.Attributes.push(i.getAttribute(attrB))
                        })
                    }else{
                        this.stat = true;
                    }

                    this.event = e;

                    if (this.stat){
                        CallbackFn();
                    }

                }
            })
        }
        this.Selection = new JsSelector(this.Str_selector).Selection;
    }

    /**
     *
     * @param ClassName
     * @constructor
     */
    RemoveClass(ClassName){
        this.Selection.forEach((i) => {
            i.classList.remove(ClassName);
        })
        this.Selection = new JsSelector(this.Str_selector).Selection;

    }

    /**
     *
     * @param ClassName
     * @constructor
     */
    AddClass(ClassName){
        this.Selection.forEach((i) => {
            i.classList.add(ClassName);
        })
        this.Selection = new JsSelector(this.Str_selector).Selection;

    }

    /**
     *
     * @param ClassName
     * @constructor
     */
    ToggleClass(ClassName){
        this.Selection.forEach((i) => {
            i.classList.toggle(ClassName);
        })
        this.Selection = new JsSelector(this.Str_selector).Selection;

    }


    /**
     *
     * @param IdName
     * @param count
     * @returns {boolean}
     * @constructor
     */
    RemoveId(IdName, count = 0){
        if (this.Selection.length !== 0){
            let is_success = false;

            this.Selection.forEach((i) => {

                let id = i.getAttribute("id");
                if (typeof id == "string"){
                    id = id.split(" ");
                    id.forEach((count, $id) => {
                        if (count === IdName){
                            console.log("aa");
                            id.splice($id, 1);
                            i.setAttribute("id", id.join(" ").trim())
                            is_success = true;
                        }else
                            is_success = false;
                    })
                }
            })
            this.Selection = new JsSelector(this.Str_selector).Selection;

            return is_success;
        }
        this.Selection = new JsSelector(this.Str_selector).Selection;

        return false;
    }

    /**
     *
     * @param IdName
     * @param count
     * @returns {boolean}
     * @constructor
     */

    AddId(IdName, count = 0){
        IdName = IdName.replace(" ", "_");
        if (this.Selection.length !== 0){
            let get_ids = this.Selection[count].getAttribute("id");
            // let is_str = false;
            if (typeof get_ids === "string"){
                get_ids = get_ids.split(" ");
                // is_str = true;
            }

            let is_success = true;

            if (get_ids){
                get_ids.forEach((i) => {
                    if (IdName === i){
                        is_success = !is_success;
                    }
                })
                this.Selection = new JsSelector(this.Str_selector).Selection;

            }else {
                is_success = false;
                this.Selection[count].setAttribute("id", IdName);
                this.Selection = new JsSelector(this.Str_selector).Selection;

                return true;
            }
            this.Selection = new JsSelector(this.Str_selector).Selection;

                if (is_success){
                    get_ids.push(IdName);
                    this.Selection[count].setAttribute("id", get_ids.join(" "));
                    this.Selection = new JsSelector(this.Str_selector).Selection;

                    return true;
                }
            this.Selection = new JsSelector(this.Str_selector).Selection;


        }
        this.Selection = new JsSelector(this.Str_selector).Selection;

        return false;
    }

    /**
     *
     * @param IdName
     * @param count
     * @returns {boolean}
     * @constructor
     */

    ToggleId(IdName, count = 0){
        IdName = IdName.replace(" ", "_");
        if (this.Selection.length !== 0){
            let get_ids = this.Selection[count].getAttribute("id");
            // let is_str = false;
            if (typeof get_ids === "string"){
                get_ids = get_ids.split(" ");
                // is_str = true;
            }

            let is_success = false;
            let is_success_add = false;
            let is_success_remove = false;
            let remove;

            if (get_ids){
                get_ids.forEach((i, b) => {
                    if (IdName === i){
                        get_ids.splice(b, 1);
                        remove = get_ids.join(" ");
                        is_success = true;
                        is_success_remove = true;
                    }else
                    {
                        is_success = true;
                        is_success_add = true;
                    }
                })
            }else {
                is_success = false;
                this.Selection[count].setAttribute("id", IdName);
                this.Selection = new JsSelector(this.Str_selector).Selection;

                return true;
            }
            if (is_success_add){
                get_ids.push(IdName);
                this.Selection[count].setAttribute("id", get_ids.join(" "));
            }
            if (is_success_remove){
                get_ids.push(IdName);
                this.Selection[count].setAttribute("id", get_ids.join(" "));
                this.Selection[count].setAttribute("id", remove);
            }
            this.Selection = new JsSelector(this.Str_selector).Selection;

            return is_success;

        }
        this.Selection = new JsSelector(this.Str_selector).Selection;

        return false;
    }

    setStyle(...Styles){
        console.log(Styles);
        let CreateStyleTag = new JsSelector("#☢️_styles");
        let is_setup = false;
        if (CreateStyleTag.Selection.length === 0){
            CreateStyleTag = document.createElement("style");
            CreateStyleTag.setAttribute("id", "☢️_styles");
            is_setup = true;
            this.Selection = new JsSelector(this.Str_selector).Selection;

        }else {
            CreateStyleTag = CreateStyleTag[0];
            this.Selection = new JsSelector(this.Str_selector).Selection;

        }
        let endStyle = "";
        Styles.forEach((i) => {
            endStyle += `        ${i};\n`;
        });
        CreateStyleTag.innerHTML += "\n\n\n" + this.Str_selector + "{\n        " + endStyle + "\n}";
        this.Selection = new JsSelector(this.Str_selector).Selection;


        if (is_setup){
            document.head.append(CreateStyleTag);
            this.Selection = new JsSelector(this.Str_selector).Selection;

        }
        this.Selection = new JsSelector(this.Str_selector).Selection;
    }


    Loop(CallBackFn){
        console.log(document.onclick)
    }



    setAttribute(qualifiedName, value){
        this.Selection.forEach((i) => {
            i.setAttribute(qualifiedName, value);
        })
        this.Selection = new JsSelector(this.Str_selector).Selection;
    }
}


