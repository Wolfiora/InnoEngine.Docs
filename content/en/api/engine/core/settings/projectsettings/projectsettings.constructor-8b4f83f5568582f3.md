---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8b4f83f5568582f351fd7b7e638144878a6078c9582fe081f83e53203e144f93
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettings.#ctor(Inno.Core.IO.IByteDocumentStore,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Settings.ProjectID,Inno.Core.Serialization.SerializationContext,System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingsContributor})
title: ProjectSettings.Constructor
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
sourceFingerprint: b0967caed7c417688aab894d3bc486f78d30758bfbcac4d7dc0f1010f0b15c62
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `documentStore`:** The project document source; read-only deployments cannot persist project overrides.

**Parameter `types`:** The type catalog that owns project setting definitions and composers.

**Parameter `serialization`:** The serialization registry used for settings documents and contribution payloads.

**Parameter `defaultProjectID`:** The project namespace used when the document has no authored identity override.

**Parameter `serializationContext`:** The owner's complete reference resolver context, used for defaults, contributions and returned snapshots.

**Parameter `contributors`:** Dependency-ordered default contributors.

## Exceptions

**Exception `T:System.ArgumentNullException`:** A required service or the owner's serialization context is null.
