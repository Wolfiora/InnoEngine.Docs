---
uid: api.a8bc81f9929080fae236c1e122843312576056d5bce7031523b752af1f8252e3
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.SettingsDocumentStore\u00601.#ctor(Inno.Core.IO.IByteDocumentStore,Inno.Core.Serialization.SerializationRegistry,System.Func{\u00600},System.Action{\u00600})"
source: xml
reviewed: 404f14153c31b5b2c396a11f2027e59d1b482ba8c52d666bc1fea8af73384fe4
title: "Constructor"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Creates a type-safe settings document store.

**Parameter `document`:** The borrowed document boundary; read-only sources explicitly reject writes.

**Parameter `serialization`:** The active serialization registry.

**Parameter `createDefault`:** Creates a newly owned value when the document does not exist.

**Parameter `validate`:** Validates one deserialized or candidate document.
