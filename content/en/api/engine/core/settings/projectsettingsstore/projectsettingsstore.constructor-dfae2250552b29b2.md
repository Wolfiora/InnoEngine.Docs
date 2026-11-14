---
uid: api.dfae2250552b29b2f664a906b5fc820946ae9cf9ef5d3b2fba4ea8cec7db195b
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingsStore.#ctor(Inno.Core.IO.IByteDocumentStore,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Settings.ProjectId,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: b9b6406a8e5a5c38875b358061347d93621ff74607135c0f694d045544dab917
title: "ProjectSettingsStore.Constructor"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Creates a project settings store from one type and serialization generation owner.

## Parameters

**Parameter `documentStore`:** The borrowed document boundary; writable authoring and read-only runtime sources use the same protocol.

**Parameter `types`:** The type catalog that owns setting definitions and composers.

**Parameter `serialization`:** The serialization registry used for documents and contribution payloads.

**Parameter `defaultProjectId`:** The project namespace used until an authored identity override is saved.

**Parameter `serializationContext`:** The owner's complete resolver context; settings never construct a partial reference context themselves.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when a service dependency is null.
