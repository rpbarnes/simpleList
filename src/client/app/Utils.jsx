import React from 'react';


function Store(nameTag, data) {
    // If I pass data write it to local storage. If not pull the nameTag from localStorage.
    if (data) {
        return localStorage.setItem(nameTag,JSON.stringify(data));
    } else {
        var fromStore = localStorage.getItem(nameTag);
        return (fromStore && JSON.parse(fromStore)) || []; // This is straight from somewhere else I'm guessing this puts the json string to an array elemet.
    }
}
