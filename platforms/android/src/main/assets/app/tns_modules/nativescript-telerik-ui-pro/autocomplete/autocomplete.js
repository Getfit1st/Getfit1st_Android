Object.defineProperty(exports, "__esModule", { value: true });
var commonModule = require("./autocomplete-common");
var utilsModule = require("tns-core-modules/utils/utils");
var builder = require("tns-core-modules/ui/builder");
var layoutsModule = require("tns-core-modules/ui/layouts/stack-layout");
require("utils/module-merge").merge(commonModule, exports);
var knownTemplates;
(function (knownTemplates) {
    knownTemplates.suggestionItemTemplate = "suggestionItemTemplate";
})(knownTemplates = exports.knownTemplates || (exports.knownTemplates = {}));
var TokenModel = (function (_super) {
    __extends(TokenModel, _super);
    function TokenModel(text, imageName) {
        var _this = _super.call(this, text, imageName) || this;
        if (imageName != undefined) {
            var nativeValue = imageName;
            var drawable;
            if (imageName.startsWith("res://")) {
                nativeValue = imageName.substring(6, imageName.length);
            }
            var appResources = utilsModule.ad.getApplicationContext().getResources();
            var packageName = utilsModule.ad.getApplication().getPackageName();
            if (appResources) {
                var identifier = appResources.getIdentifier(nativeValue, 'drawable', packageName);
                drawable = appResources.getDrawable(identifier);
            }
            _this._android = new com.telerik.widget.autocomplete.TokenModel(text, drawable);
            _this._android.setNsImageName(imageName);
        }
        else {
            _this._android = new com.telerik.widget.autocomplete.TokenModel(text, null);
        }
        return _this;
    }
    Object.defineProperty(TokenModel.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    return TokenModel;
}(commonModule.TokenModel));
exports.TokenModel = TokenModel;
var SuggestionView = (function (_super) {
    __extends(SuggestionView, _super);
    function SuggestionView(parent) {
        return _super.call(this) || this;
    }
    Object.defineProperty(SuggestionView.prototype, "android", {
        get: function () {
            return this._android;
        },
        set: function (value) {
            this._android = value;
        },
        enumerable: true,
        configurable: true
    });
    return SuggestionView;
}(commonModule.SuggestionView));
exports.SuggestionView = SuggestionView;
var AutoCompleteAdapter = (function (_super) {
    __extends(AutoCompleteAdapter, _super);
    function AutoCompleteAdapter(owner, items) {
        var _this = _super.call(this, utilsModule.ad.getApplicationContext(), items, null) || this;
        _this.suggestionsMap = {};
        _this.owner = owner;
        return global.__native(_this);
    }
    AutoCompleteAdapter.prototype.onCreateViewHolder = function (parent, viewType) {
        var view = builder.parse(this.owner.suggestionView.suggestionItemTemplate, this);
        var parentView = new layoutsModule.StackLayout();
        parentView.orientation = "vertical";
        parentView.addChild(view);
        this.owner._addView(parentView);
        var layoutParams = new org.nativescript.widgets.CommonLayoutParams();
        layoutParams.width = org.nativescript.widgets.CommonLayoutParams.MATCH_PARENT;
        layoutParams.height = org.nativescript.widgets.CommonLayoutParams.WRAP_CONTENT;
        var holder = new com.telerik.widget.list.ListViewHolder(parentView.android);
        parentView.android.setLayoutParams(layoutParams);
        holder['nsView'] = parentView;
        return holder;
    };
    AutoCompleteAdapter.prototype.onBindViewHolder = function (holder, position) {
        var nativeItem = this.getFilteredList().get(position);
        var img = nativeItem.getNsImageName();
        holder.nsView.bindingContext = new TokenModel(nativeItem.getText(), img);
    };
    return AutoCompleteAdapter;
}(com.telerik.widget.autocomplete.AutoCompleteAdapter));
exports.AutoCompleteAdapter = AutoCompleteAdapter;
var AutoCompleteRemoteFetchAdapter = (function (_super) {
    __extends(AutoCompleteRemoteFetchAdapter, _super);
    function AutoCompleteRemoteFetchAdapter(owner, items) {
        var _this = _super.call(this, utilsModule.ad.getApplicationContext(), items, null) || this;
        _this.suggestionsMap = {};
        _this.owner = owner;
        return global.__native(_this);
    }
    AutoCompleteRemoteFetchAdapter.prototype.filter = function (charText) {
        this.owner.android.getAdapter().getFilteredList().clear();
        charText = charText.toLowerCase();
        var self = this;
        if (charText.length != 0) {
            this.owner.asyncCall(charText).then(function (items) {
                var result = new java.util.ArrayList();
                var nsResult = new Array();
                if (self.owner.completionMode == commonModule.CompletionMode.StartsWith) {
                    for (var i = 0; i < items.length; i++) {
                        var current = items[i];
                        var upperCase = current.android.getText().toLowerCase();
                        if (upperCase.startsWith(charText)) {
                            result.add(current.android);
                            nsResult.push(current);
                        }
                    }
                }
                else {
                    for (var i = 0; i < items.length; i++) {
                        var current = items[i];
                        var upperCase = current.android.getText().toLowerCase();
                        if (upperCase.indexOf(charText != -1)) {
                            result.add(current.android);
                            nsResult.push(current);
                        }
                    }
                }
                self.setItems(result);
                self.owner.android.getAdapter().setFilteredList(result);
                self.owner.android.resolveAfterFilter(self.owner.android.getTextField().getText().toString(), true);
                self.owner.filteredItems = nsResult;
            });
        }
    };
    AutoCompleteRemoteFetchAdapter.prototype.onCreateViewHolder = function (parent, viewType) {
        var view = builder.parse(this.owner.suggestionView.suggestionItemTemplate, this);
        var parentView = new layoutsModule.StackLayout();
        parentView.orientation = "vertical";
        parentView.addChild(view);
        this.owner._addView(parentView);
        var layoutParams = new org.nativescript.widgets.CommonLayoutParams();
        layoutParams.width = org.nativescript.widgets.CommonLayoutParams.MATCH_PARENT;
        layoutParams.height = org.nativescript.widgets.CommonLayoutParams.WRAP_CONTENT;
        var holder = new com.telerik.widget.list.ListViewHolder(parentView.android);
        parentView.android.setLayoutParams(layoutParams);
        holder.nsView = parentView;
        return holder;
    };
    AutoCompleteRemoteFetchAdapter.prototype.onBindViewHolder = function (holder, position) {
        var nativeItem = this.getFilteredList().get(position);
        var img = nativeItem.getNsImageName();
        if (holder.nsView != undefined) {
            holder.nsView.bindingContext = new TokenModel(nativeItem.getText(), img);
        }
    };
    return AutoCompleteRemoteFetchAdapter;
}(com.telerik.widget.autocomplete.AutoCompleteAdapter));
exports.AutoCompleteRemoteFetchAdapter = AutoCompleteRemoteFetchAdapter;
var RadAutoCompleteTextView = (function (_super) {
    __extends(RadAutoCompleteTextView, _super);
    function RadAutoCompleteTextView() {
        var _this = _super.call(this) || this;
        _this.filteredItems = new Array();
        return _this;
    }
    RadAutoCompleteTextView.prototype.createNativeView = function () {
        this._android = new com.telerik.widget.autocomplete.RadAutoCompleteTextView(this._context);
        var that = new WeakRef(this);
        this._android.addTokenAddedListener(new com.telerik.widget.autocomplete.TokenAddedListener({
            onTokenAdded: function (autoComplete, token) {
                var args = new commonModule.AutoCompleteEventData(commonModule.RadAutoCompleteTextView.tokenAddedEvent, autoComplete, token);
                that.get().notify(args);
            }
        }));
        this._android.addTokenSelectedListener(new com.telerik.widget.autocomplete.TokenSelectedListener({
            onTokenSelected: function (autoComplete, token) {
                var args = new commonModule.AutoCompleteEventData(commonModule.RadAutoCompleteTextView.tokenSelectedEvent, autoComplete, token);
                that.get().notify(args);
            }
        }));
        this._android.addTokenRemovedListener(new com.telerik.widget.autocomplete.TokenRemovedListener({
            onTokenRemoved: function (autoComplete, token) {
                var args = new commonModule.AutoCompleteEventData(commonModule.RadAutoCompleteTextView.tokenRemovedEvent, autoComplete, token);
                that.get().notify(args);
            }
        }));
        if (this.displayMode) {
            this.adjustDisplayMode(this.displayMode);
        }
        if (this.suggestMode) {
            this.adjustSuggestMode(this.suggestMode);
        }
        if (this.layoutMode) {
            this.adjustLayoutMode(this.layoutMode);
        }
        if (this.completionMode) {
            this.adjustCompletionMode(this.completionMode);
        }
        if (this.suggestionView) {
            this.adjustSuggestionView(this.suggestionView);
        }
        if (this.minimumCharactersToSearch) {
            this.adjustMinimumCharactersToSearch(this.minimumCharactersToSearch);
        }
        if (this.asyncCall) {
            this.adjustAsyncCall(true);
        }
        else {
            this.loadData(false);
        }
        return this._nativeView;
    };
    Object.defineProperty(RadAutoCompleteTextView.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadAutoCompleteTextView.prototype, "_nativeView", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    RadAutoCompleteTextView.prototype.resetAutocomplete = function () {
        this._android.resetAutocomplete();
    };
    RadAutoCompleteTextView.prototype.addToken = function (token) {
        var nativeObject = new com.telerik.widget.autocomplete.TokenModel(token.text, null);
        var nativeTokenView = new com.telerik.widget.autocomplete.TokenView(this._context);
        nativeTokenView.setModel(nativeObject);
        this._android.addToken(nativeTokenView);
    };
    RadAutoCompleteTextView.prototype.insertTokenAtIndex = function (token, index) {
        var nativeObject = new com.telerik.widget.autocomplete.TokenModel(token.text, null);
        var nativeTokenView = new com.telerik.widget.autocomplete.TokenView(this._context);
        nativeTokenView.setModel(nativeObject);
        this._android.insertTokenAt(index, nativeTokenView);
    };
    RadAutoCompleteTextView.prototype.removeToken = function (token) {
        var nativeObject = new com.telerik.widget.autocomplete.TokenModel(token.text, null);
        var nativeTokenView = new com.telerik.widget.autocomplete.TokenView(this._context);
        nativeTokenView.setModel(nativeObject);
        this._android.removeToken(nativeTokenView);
    };
    RadAutoCompleteTextView.prototype.removeTokenAtIndex = function (index) {
        this._android.removeTokenAt(index);
    };
    RadAutoCompleteTextView.prototype.removeAllTokens = function () {
        this._android.removeAllTokens();
    };
    RadAutoCompleteTextView.prototype.tokens = function () {
        return this._android.getTokens();
    };
    RadAutoCompleteTextView.prototype.tokenAtIndex = function (index) {
        return this._android.getTokenAt(index);
    };
    RadAutoCompleteTextView.prototype.onDisplayModeChanged = function (oldValue, newValue) {
        this.adjustDisplayMode(newValue);
    };
    RadAutoCompleteTextView.prototype.onLayoutModeChanged = function (oldValue, newValue) {
        this.adjustLayoutMode(newValue);
    };
    RadAutoCompleteTextView.prototype.onSuggestModeChanged = function (oldValue, newValue) {
        this.adjustSuggestMode(newValue);
    };
    RadAutoCompleteTextView.prototype.onCompletionModeChanged = function (oldValue, newValue) {
        this.adjustCompletionMode(newValue);
    };
    RadAutoCompleteTextView.prototype.onItemsChanged = function (oldValue, newValue) {
        this.loadData(false);
    };
    RadAutoCompleteTextView.prototype.onSuggestionViewChanged = function (oldValue, newValue) {
        this.adjustSuggestionView(newValue);
    };
    RadAutoCompleteTextView.prototype.onMinimumCharactersToSearchChanged = function (oldValue, newValue) {
        this.adjustMinimumCharactersToSearch(newValue);
    };
    RadAutoCompleteTextView.prototype.onLoadSuggestionsAsyncChanged = function (oldValue, newValue) {
        this.asyncCall = newValue;
        this.adjustAsyncCall(true);
    };
    RadAutoCompleteTextView.prototype.adjustAsyncCall = function (value) {
        if (this._android && value) {
            this._android.setUsingAsyncData(value);
            this.loadData(true);
        }
    };
    RadAutoCompleteTextView.prototype.adjustMinimumCharactersToSearch = function (value) {
        if (this._android && value) {
            this._android.setMinimumCharactersToSearch(value);
        }
    };
    RadAutoCompleteTextView.prototype.adjustSuggestionView = function (value) {
        if (this._android && value) {
            var suggestionView = value;
            suggestionView.android = this._android.getSuggestionView();
            this._android.setSuggestionViewHeight(suggestionView.suggestionViewHeight);
        }
    };
    RadAutoCompleteTextView.prototype.adjustCompletionMode = function (value) {
        if (this._android && value) {
            if (value == commonModule.CompletionMode.Contains) {
                this._android.getAdapter().setCompletionMode(com.telerik.widget.autocomplete.CompletionMode.CONTAINS);
            }
            else {
                this._android.getAdapter().setCompletionMode(com.telerik.widget.autocomplete.CompletionMode.STARTS_WITH);
            }
        }
    };
    RadAutoCompleteTextView.prototype.adjustDisplayMode = function (value) {
        if (this._android && value) {
            this._android.setDisplayMode((value === commonModule.DisplayMode.Plain) ?
                com.telerik.widget.autocomplete.DisplayMode.PLAIN :
                com.telerik.widget.autocomplete.DisplayMode.TOKENS);
        }
    };
    RadAutoCompleteTextView.prototype.adjustSuggestMode = function (value) {
        if (this._android && value) {
            if (value == commonModule.SuggestMode.Suggest) {
                this._android.setSuggestMode(com.telerik.widget.autocomplete.SuggestMode.SUGGEST);
            }
            else if (value == commonModule.SuggestMode.Append) {
                this._android.setSuggestMode(com.telerik.widget.autocomplete.SuggestMode.APPEND);
            }
            else {
                this._android.setSuggestMode(com.telerik.widget.autocomplete.SuggestMode.SUGGEST_APPEND);
            }
        }
    };
    RadAutoCompleteTextView.prototype.adjustLayoutMode = function (value) {
        if (value && this._android) {
            this._android.setTokensLayoutMode((value === commonModule.LayoutMode.Horizontal) ?
                com.telerik.widget.autocomplete.LayoutMode.HORIZONTAL :
                com.telerik.widget.autocomplete.LayoutMode.WRAP);
        }
    };
    RadAutoCompleteTextView.prototype.loadData = function (isRemote) {
        if (this.android != undefined) {
            if ((this.items == undefined && isRemote == true) || this.items != undefined) {
                var nativeSource = new java.util.ArrayList();
                if (this.items != undefined) {
                    for (var i = 0; i < this.items.length; i++) {
                        var a = this.items.getItem(i);
                        nativeSource.add(a.android);
                    }
                }
                var adapter;
                if (isRemote) {
                    adapter = new AutoCompleteRemoteFetchAdapter(this, nativeSource);
                }
                else {
                    adapter = new AutoCompleteAdapter(this, nativeSource);
                }
                this._android.setAdapter(adapter);
            }
        }
    };
    return RadAutoCompleteTextView;
}(commonModule.RadAutoCompleteTextView));
exports.RadAutoCompleteTextView = RadAutoCompleteTextView;
