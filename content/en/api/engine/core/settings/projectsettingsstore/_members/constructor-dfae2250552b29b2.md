---
uid: api.dfae2250552b29b2f664a906b5fc820946ae9cf9ef5d3b2fba4ea8cec7db195b
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingsStore.#ctor(Inno.Core.IO.IByteDocumentStore,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Settings.ProjectId,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: 93f8b71a8f1156fa7a4bc28edd10b74f7b0e10dda5abb1affdaa561578901d58
title: "Constructor"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Creates a project settings store from one type and serialization generation owner.

**Parameter `documentStore`:** The borrowed document boundary; writable authoring and read-only runtime sources use the same protocol.

**Parameter `types`:** The type catalog that owns setting definitions and composers.

**Parameter `serialization`:** The serialization registry used for documents and contribution payloads.

**Parameter `defaultProjectId`:** The project namespace used until an authored identity override is saved.

**Parameter `serializationContext`:** The owner's complete resolver context; settings never construct a partial reference context themselves.

**Exception `T:System.ArgumentNullException`:** Thrown when a service dependency is null.
