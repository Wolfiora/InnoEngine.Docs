---
uid: api.661d6e20db3aef6c6ce3c3d707358de37f740effc9349564d6c010aaca147a8b
symbol: "engine:Inno.Tooling.Architecture:M:Inno.Tooling.Architecture.ArchitectureValidator.Execute(System.String[],System.Threading.CancellationToken)"
source: xml
reviewed: 7e9dd3a593c01f5645b8344b1b107fc2d1da49e90bab5b0e2a66d6dfdefbeef0
title: "Execute"
kind: api
owners: [Inno.Tooling.Architecture]
apiSurface: source-clr
---

Executes repository validation or an explicitly requested documentation maintenance operation.

**Parameter `arguments`:** The optional repository path, configuration, XML maintenance flag, explicit SDK, evaluated graph output, selected API owners and an optional prepared SDK snapshot. Product documentation is validated by the docs command group.

**Parameter `cancellationToken`:** Cancels owned SDK evaluation processes and drains them before returning.

**Returns:** Zero when validation succeeds, or one when any invariant is violated.

**Exception `T:System.ArgumentException`:** An option is unknown or more than one repository path is supplied.

**Exception `T:System.IO.DirectoryNotFoundException`:** The requested path is not inside an engine checkout.

**Exception `T:System.OperationCanceledException`:** The caller cancels evaluated SDK project inspection.

**Exception `T:System.IO.InvalidDataException`:** A prepared SDK snapshot or evaluated source contract is invalid.
