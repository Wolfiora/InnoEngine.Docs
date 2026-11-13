---
uid: api.d71320a80206d737e4fa9920f647b4133ac6478b13ade234a90e39babba6dc13
symbol: "engine:Inno.UI:M:Inno.UI.UiFontRegistration.#ctor(System.ReadOnlyMemory{System.Byte},System.Int32,System.String,Inno.Text.TextFontStyle,System.Int32)"
source: xml
reviewed: 1537df4e1d653fcd9bded81ece5003648af05dcdd3f5bfb14ebce5bbc9a440ac
title: "Constructor"
kind: api
owners: [Inno.UI]
apiSurface: source-clr
---

Creates a validated synchronous font registration request.

**Parameter `data`:** Encoded font bytes, valid for the duration of the backend call.

**Parameter `faceIndex`:** Zero-based face index in a font collection.

**Parameter `family`:** Logical family visible to document authors.

**Parameter `style`:** Requested logical font style.

**Parameter `weight`:** CSS-compatible weight from 100 through 1000.
