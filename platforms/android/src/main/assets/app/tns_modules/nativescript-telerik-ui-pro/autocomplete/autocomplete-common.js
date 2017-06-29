Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("tns-core-modules/ui/core/view");
//Enums
var DisplayMode;
(function (DisplayMode) {
    DisplayMode.Tokens = "Tokens";
    DisplayMode.Plain = "Plain";
})(DisplayMode = exports.DisplayMode || (exports.DisplayMode = {}));
var SuggestMode;
(function (SuggestMode) {
    SuggestMode.Suggest = "Suggest";
    SuggestMode.Append = "Append";
    SuggestMode.SuggestAppend = "SuggestAppend";
})(SuggestMode = exports.SuggestMode || (exports.SuggestMode = {}));
var LayoutMode;
(function (LayoutMode) {
    LayoutMode.Horizontal = "Horizontal";
    LayoutMode.Wrap = "Wrap";
})(LayoutMode = exports.LayoutMode || (exports.LayoutMode = {}));
var CompletionMode;
(function (CompletionMode) {
    CompletionMode.StartsWith = "StartsWith";
    CompletionMode.Contains = "Contains";
})(CompletionMode = exports.CompletionMode || (exports.CompletionMode = {}));
// AutoComplete object classes
var SuggestionView = (function (_super) {
    __extends(SuggestionView, _super);
    function SuggestionView() {
        return _super.call(this) || this;
    }
    Object.defineProperty(SuggestionView.prototype, "android", {
        //properties
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuggestionView.prototype, "ios", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuggestionView.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        set: function (value) {
            this._owner = value;
        },
        enumerable: true,
        configurable: true
    });
    SuggestionView.prototype.updateView = function () {
    };
    SuggestionView.prototype.onSuggestionViewHeightPropertyChanged = function (oldValue, newValue) {
        this.onSuggestionViewHeightChanged(oldValue, newValue);
    };
    SuggestionView.prototype.onSuggestionViewHeightChanged = function (oldValue, newValue) {
    };
    SuggestionView.prototype.onSuggestionItemTemplatePropertyChanged = function (oldValue, newValue) {
        this.onSuggestionItemTemplateChanged(oldValue, newValue);
    };
    SuggestionView.prototype.onSuggestionItemTemplateChanged = function (oldValue, newValue) {
    };
    return SuggestionView;
}(view_1.View));
SuggestionView.suggestionViewHeightProperty = new view_1.Property({
    name: "suggestionViewHeight",
    defaultValue: 150,
    valueConverter: function (value) {
        if (typeof value === "string") {
            return parseInt(value);
        }
        return value;
    },
    valueChanged: function (target, oldValue, newValue) {
        target.onSuggestionViewHeightPropertyChanged(oldValue, newValue);
    },
});
SuggestionView.suggestionItemTemplateProperty = new view_1.Property({
    name: "suggestionItemTemplate",
    defaultValue: undefined,
    valueChanged: function (target, oldValue, newValue) {
        target.onSuggestionItemTemplatePropertyChanged(oldValue, newValue);
    },
});
exports.SuggestionView = SuggestionView;
SuggestionView.suggestionViewHeightProperty.register(SuggestionView);
SuggestionView.suggestionItemTemplateProperty.register(SuggestionView);
//TokenModel
var TokenModel = (function () {
    function TokenModel(text, image) {
        this.text = text;
        this.image = image;
    }
    Object.defineProperty(TokenModel.prototype, "android", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenModel.prototype, "ios", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    return TokenModel;
}());
exports.TokenModel = TokenModel;
// Event object
var AutoCompleteEventData = (function () {
    function AutoCompleteEventData(eventName, autocomplete, object) {
        this._autocomplete = autocomplete;
        this._object = object;
        this._eventName = eventName;
    }
    Object.defineProperty(AutoCompleteEventData.prototype, "eventName", {
        get: function () {
            return this._eventName;
        },
        set: function (value) {
            this._eventName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutoCompleteEventData.prototype, "autocomplete", {
        get: function () {
            return this._autocomplete;
        },
        set: function (value) {
            this._autocomplete = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutoCompleteEventData.prototype, "object", {
        get: function () {
            return this._object;
        },
        set: function (value) {
            this._object = value;
        },
        enumerable: true,
        configurable: true
    });
    return AutoCompleteEventData;
}());
exports.AutoCompleteEventData = AutoCompleteEventData;
// RadAutoComplete impl
var RadAutoCompleteTextView = (function (_super) {
    __extends(RadAutoCompleteTextView, _super);
    function RadAutoCompleteTextView() {
        return _super.call(this) || this;
    }
    Object.defineProperty(RadAutoCompleteTextView.prototype, "android", {
        //properties
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadAutoCompleteTextView.prototype, "ios", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    RadAutoCompleteTextView.prototype.onLoadSuggestionsAsyncPropertyChanged = function (oldValue, newValue) {
        this.onLoadSuggestionsAsyncChanged(oldValue, newValue);
    };
    RadAutoCompleteTextView.prototype.onLoadSuggestionsAsyncChanged = function (oldValue, newValue) {
    };
    RadAutoCompleteTextView.prototype.onItemsPropertyChanged = function (oldValue, newValue) {
        this.onItemsChanged(oldValue, newValue);
    };
    RadAutoCompleteTextView.prototype.onItemsChanged = function (oldValue, newValue) {
    };
    RadAutoCompleteTextView.prototype.onSuggestionViewPropertyChanged = function (oldValue, newValue) {
        this.onSuggestionViewChanged(oldValue, newValue);
    };
    RadAutoCompleteTextView.prototype.onSuggestionViewChanged = function (oldValue, newValue) {
    };
    RadAutoCompleteTextView.prototype.onDisplayModePropertyChanged = function (oldValue, newValue) {
        this.onDisplayModeChanged(oldValue, newValue);
    };
    RadAutoCompleteTextView.prototype.onDisplayModeChanged = function (oldValue, newValue) {
    };
    RadAutoCompleteTextView.prototype.onCompletionModePropertyChanged = function (oldValue, newValue) {
        this.onCompletionModeChanged(oldValue, newValue);
    };
    RadAutoCompleteTextView.prototype.onCompletionModeChanged = function (oldValue, newValue) {
    };
    RadAutoCompleteTextView.prototype.onLayoutModePropertyChanged = function (oldValue, newValue) {
        this.onLayoutModeChanged(oldValue, newValue);
    };
    RadAutoCompleteTextView.prototype.onLayoutModeChanged = function (oldValue, newValue) {
    };
    RadAutoCompleteTextView.prototype.onSuggestModePropertyChanged = function (oldValue, newValue) {
        this.onSuggestModeChanged(oldValue, newValue);
    };
    RadAutoCompleteTextView.prototype.onSuggestModeChanged = function (oldValue, newValue) {
    };
    RadAutoCompleteTextView.prototype.onMinimumCharactersToSearchPropertyChanged = function (oldValue, newValue) {
        this.onMinimumCharactersToSearchChanged(oldValue, newValue);
    };
    RadAutoCompleteTextView.prototype.onMinimumCharactersToSearchChanged = function (oldValue, newValue) {
    };
    RadAutoCompleteTextView.prototype.onShowCloseButtonPropertyChanged = function (oldValue, newValue) {
        this.onShowCloseButtonChanged(oldValue, newValue);
    };
    RadAutoCompleteTextView.prototype.onShowCloseButtonChanged = function (oldValue, newValue) {
    };
    RadAutoCompleteTextView.prototype.onCloseButtonImageSrcPropertyChanged = function (oldValue, newValue) {
        this.onCloseButtonImageSrcChanged(oldValue, newValue);
    };
    RadAutoCompleteTextView.prototype.onCloseButtonImageSrcChanged = function (oldValue, newValue) {
    };
    //Methods
    RadAutoCompleteTextView.prototype.resetAutocomplete = function () {
    };
    RadAutoCompleteTextView.prototype.addToken = function (token) {
    };
    RadAutoCompleteTextView.prototype.insertTokenAtIndex = function (token, index) {
    };
    RadAutoCompleteTextView.prototype.removeToken = function (token) {
    };
    RadAutoCompleteTextView.prototype.removeTokenAtIndex = function (index) {
    };
    RadAutoCompleteTextView.prototype.removeAllTokens = function () {
    };
    RadAutoCompleteTextView.prototype.tokens = function () {
    };
    RadAutoCompleteTextView.prototype.tokenAtIndex = function (index) {
    };
    return RadAutoCompleteTextView;
}(view_1.View));
RadAutoCompleteTextView.tokenRemovedEvent = "tokenRemoved";
RadAutoCompleteTextView.tokenAddedEvent = "tokenAdded";
RadAutoCompleteTextView.tokenSelectedEvent = "tokenSelected";
RadAutoCompleteTextView.suggestionViewBecameVisibleEvent = "suggestionViewBecameVisible";
RadAutoCompleteTextView.loadSuggestionsAsyncProperty = new view_1.Property({
    name: "loadSuggestionsAsync",
    defaultValue: undefined,
    valueChanged: function (target, oldValue, newValue) {
        target.onLoadSuggestionsAsyncPropertyChanged(oldValue, newValue);
    },
});
RadAutoCompleteTextView.itemsProperty = new view_1.Property({
    name: "items",
    defaultValue: undefined,
    valueChanged: function (target, oldValue, newValue) {
        target.onItemsPropertyChanged(oldValue, newValue);
    },
});
// SuggestionView
RadAutoCompleteTextView.suggestionViewProperty = new view_1.Property({
    name: "suggestionView",
    defaultValue: undefined,
    valueChanged: function (target, oldValue, newValue) {
        target.onSuggestionViewPropertyChanged(oldValue, newValue);
    },
});
// Display mode
RadAutoCompleteTextView.displayModeProperty = new view_1.Property({
    name: "displayMode",
    defaultValue: DisplayMode.Plain,
    valueChanged: function (target, oldValue, newValue) {
        target.onDisplayModePropertyChanged(oldValue, newValue);
    },
});
// Completion Mode
RadAutoCompleteTextView.completionModeProperty = new view_1.Property({
    name: "completionMode",
    defaultValue: CompletionMode.StartsWith,
    valueChanged: function (target, oldValue, newValue) {
        target.onCompletionModePropertyChanged(oldValue, newValue);
    },
});
// Layout mode
RadAutoCompleteTextView.layoutModeProperty = new view_1.Property({
    name: "layoutMode",
    defaultValue: LayoutMode.Wrap,
    valueChanged: function (target, oldValue, newValue) {
        target.onLayoutModePropertyChanged(oldValue, newValue);
    },
});
//Suggest Mode
RadAutoCompleteTextView.suggestModeProperty = new view_1.Property({
    name: "suggestMode",
    defaultValue: SuggestMode.Suggest,
    valueChanged: function (target, oldValue, newValue) {
        target.onSuggestModePropertyChanged(oldValue, newValue);
    },
});
// MinimumCharactersToSearch
RadAutoCompleteTextView.minimumCharactersToSearchProperty = new view_1.Property({
    name: "minimumCharactersToSearch",
    defaultValue: 1,
    valueChanged: function (target, oldValue, newValue) {
        target.onMinimumCharactersToSearchPropertyChanged(oldValue, newValue);
    },
});
RadAutoCompleteTextView.showCloseButtonProperty = new view_1.Property({
    name: "showCloseButton",
    defaultValue: undefined,
    valueChanged: function (target, oldValue, newValue) {
        target.onShowCloseButtonPropertyChanged(oldValue, newValue);
    },
});
RadAutoCompleteTextView.closeButtonImageSrcProperty = new view_1.Property({
    name: "closeButtonImageSrc",
    defaultValue: undefined,
    valueChanged: function (target, oldValue, newValue) {
        target.onCloseButtonImageSrcPropertyChanged(oldValue, newValue);
    },
});
exports.RadAutoCompleteTextView = RadAutoCompleteTextView;
RadAutoCompleteTextView.loadSuggestionsAsyncProperty.register(RadAutoCompleteTextView);
RadAutoCompleteTextView.itemsProperty.register(RadAutoCompleteTextView);
RadAutoCompleteTextView.suggestionViewProperty.register(RadAutoCompleteTextView);
RadAutoCompleteTextView.displayModeProperty.register(RadAutoCompleteTextView);
RadAutoCompleteTextView.completionModeProperty.register(RadAutoCompleteTextView);
RadAutoCompleteTextView.layoutModeProperty.register(RadAutoCompleteTextView);
RadAutoCompleteTextView.suggestModeProperty.register(RadAutoCompleteTextView);
RadAutoCompleteTextView.minimumCharactersToSearchProperty.register(RadAutoCompleteTextView);
RadAutoCompleteTextView.showCloseButtonProperty.register(RadAutoCompleteTextView);
RadAutoCompleteTextView.closeButtonImageSrcProperty.register(RadAutoCompleteTextView);
