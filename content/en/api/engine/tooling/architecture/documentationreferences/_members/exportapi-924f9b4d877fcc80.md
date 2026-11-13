---
uid: api.924f9b4d877fcc80fdef69eea7e8f376bbef49c0d25825b244829028554027ef
symbol: "engine:Inno.Tooling.Architecture:M:Inno.Tooling.Architecture.DocumentationReferences.ExportApi(System.String[],System.Threading.CancellationToken)"
source: xml
reviewed: 215d8cfcf5c83c0bcd0a1c0da64e6b1f7a27982928382ba500cd696097e764a4
title: "ExportApi"
kind: api
owners: [Inno.Tooling.Architecture]
apiSurface: source-clr
---

Exports selected CLR source contracts using the existing evaluated API extractor, independently of Wiki pages. An explicit script surface reads prepared logical reference assemblies and compiler-produced origin metadata. This operation does not certify behavioral prose, examples or product execution.

**Parameter `arguments`:** Required engine-root, dotnet, output and one or more project options; optional configuration and target. Optional artifacts-path and sdk-snapshot select already prepared outputs and one resolved graph with matching properties and owners. The caller owns the execution boundary and closing input checks; a supplied graph does not independently establish freshness or certify the exported contracts. Project paths are relative to the engine root and must occur in its actual source inventory. The selected SDK and prepared references supply compilation facts; no product build is requested. Script extraction selects surface, runtime-reference and optional editor-reference instead of project, with repeated source-reference manifests resolving exact engine owners. Its SDK evaluation is preparation, with one explicit framework-project supplying the framework closure instead of evaluating all API owners; never part of a prepared-snapshot query. Missing origin metadata requires current compiler artifacts.

**Parameter `cancellationToken`:** Cancels evaluated capture and extraction before atomic publication.

**Returns:** Zero after publishing complete facts for every selected project, including explicit empty public surfaces. Source API certification remains separate from this extraction result.

**Exception `T:System.ArgumentException`:** Required options are absent, an option is duplicated or unsupported, or a project is not an actual owner.

**Exception `T:System.IO.IOException`:** Inputs are unavailable, escape ownership, or cannot be published.

**Exception `T:System.IO.InvalidDataException`:** A selected compilation or public signature is unavailable or unresolved.

**Exception `T:System.OperationCanceledException`:** The caller cancels capture, extraction or publication.
