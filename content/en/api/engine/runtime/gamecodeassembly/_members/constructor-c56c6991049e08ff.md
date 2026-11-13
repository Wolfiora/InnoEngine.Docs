---
uid: api.c56c6991049e08ff291497be1de588e3511d5db4323c8bfede79933c042bbb71
symbol: "engine:Inno.Runtime:M:Inno.Runtime.GameCodeAssembly.#ctor(System.String,System.String)"
source: xml
reviewed: b72671a6e3e57e86c0e54e39990d83f01733d0cfc614d135a4d8745e009e64da
title: "Constructor"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Validates and freezes one logical assembly identity.

**Parameter `name`:** The exact simple assembly name.

**Parameter `contentFingerprint`:** The lowercase SHA-256 fingerprint of the frozen compiler output.

**Exception `T:System.IO.InvalidDataException`:** The supplied code identity is malformed.
