---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a8bc81f9929080fae236c1e122843312576056d5bce7031523b752af1f8252e3
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.SettingsDocumentStore`1.#ctor(Inno.Core.IO.IByteDocumentStore,Inno.Core.Serialization.SerializationRegistry,System.Func{`0},System.Action{`0})
title: SettingsDocumentStore<TDocument>.Constructor
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
reviewed: a1542802142ad89270386ead595a0de01087f1fc315491418930c199fbf44f2a
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
