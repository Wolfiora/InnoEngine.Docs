---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a8bc81f9929080fae236c1e122843312576056d5bce7031523b752af1f8252e3
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.SettingsDocumentStore`1.#ctor(Inno.Core.IO.IByteDocumentStore,Inno.Core.Serialization.SerializationRegistry,System.Func{`0},System.Action{`0})
title: SettingsDocumentStore<TDocument>.Constructor
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
sourceFingerprint: 2dbd4c23fc5c61b6ed670da81c7f3e2eca4c731291b531e5d75ec6f4a71ab63d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `document`:** The borrowed document boundary; read-only sources explicitly reject writes.

**Parameter `serialization`:** The active serialization registry.

**Parameter `createDefault`:** Creates a newly owned value when the document does not exist.

**Parameter `validate`:** Validates one deserialized or candidate document.
