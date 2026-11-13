---
uid: api.a7c015f1176642799650407e9499dc9ed271d39b3c674be725ac2c5e8e7c0a7f
symbol: "engine:Inno.Tooling.Architecture:M:Inno.Tooling.Architecture.DocumentationReferences.ExportProjects(System.String[],System.Threading.CancellationToken)"
source: xml
reviewed: 07a9d879243df6daa6b005e0284416bdeb15c11795c6fcf9f85ade747582427a
title: "ExportProjects"
kind: api
owners: [Inno.Tooling.Architecture]
apiSurface: source-clr
---

Writes a deterministic project inventory without claiming evaluated API surfaces or source verification.

**Parameter `arguments`:** Explicit engine-root and output options. Output is a derived reference artifact, not a project selection table.

**Parameter `cancellationToken`:** Cancels source enumeration before atomic output publication.

**Returns:** Zero after publishing the current source-project inventory.

**Exception `T:System.ArgumentException`:** An option is missing, duplicated or unsupported.

**Exception `T:System.IO.IOException`:** A source path escapes the engine boundary or the destination cannot be published.

**Exception `T:System.IO.InvalidDataException`:** Required source discovery is empty or project identities are ambiguous.

**Exception `T:System.OperationCanceledException`:** The caller cancels before publication.
