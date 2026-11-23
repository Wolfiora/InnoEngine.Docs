---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.533ec860c121c37b1b045aa6439ffd32738fcda2e79415fb9a17b4e435098012
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingsStore.#ctor(Inno.Core.IO.IByteDocumentStore,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Settings.ProjectID,Inno.Core.Serialization.SerializationContext)
title: ProjectSettingsStore.Constructor
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
sourceFingerprint: 2222a85660c4475a9e5d0cd75d137df82b377d4df6cea9ad6cbb545218667365
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `documentStore`:** The borrowed document boundary; writable authoring and read-only runtime sources use the same protocol.

**Parameter `types`:** The type catalog that owns setting definitions and composers.

**Parameter `serialization`:** The serialization registry used for documents and contribution payloads.

**Parameter `defaultProjectID`:** The project namespace used until an authored identity override is saved.

**Parameter `serializationContext`:** The owner's complete resolver context; settings never construct a partial reference context themselves.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when a service dependency is null.
