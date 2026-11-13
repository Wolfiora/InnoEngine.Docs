---
uid: api.e51b8e26efd4f5daaf2380c2e3e8b8bcbd4d824952f4c7d6a33a573ea4f23546
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.OwnedReadStream.#ctor(System.IO.Stream,System.IDisposable)"
source: xml
reviewed: 6524694f60a1420966f3e961875210129b2ff00ba215f61bde8eabdf126e194a
title: "Constructor"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

Transfers a readable stream and its independent lifetime pin into this wrapper.

**Parameter `input`:** The owned readable stream; it is closed before its pin is released.

**Parameter `owner`:** The owned pin whose repeated disposal must safely retry unfinished retirement.

**Exception `T:System.ArgumentException`:** The stream is not readable.
