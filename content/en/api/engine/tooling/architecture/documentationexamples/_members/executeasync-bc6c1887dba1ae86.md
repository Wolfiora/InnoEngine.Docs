---
uid: api.bc6c1887dba1ae86872ff2c2bb5d6729f4b855540fe68a8350700533c0cc49e8
symbol: "engine:Inno.Tooling.Architecture:M:Inno.Tooling.Architecture.DocumentationExamples.ExecuteAsync(System.String[],System.Threading.CancellationToken)"
source: xml
reviewed: 62d5c946ec878ef6afd39ca5f643d3b1a7b4f52d142a9d5d4bc7e9ef5241fca3
title: "ExecuteAsync"
kind: api
owners: [Inno.Tooling.Architecture]
apiSurface: source-clr
---

Validates complete example groups in a prepared snapshot using one evaluated SDK graph.

**Parameter `arguments`:** Required engine-root, cache-root, snapshot, dotnet and output options; optional repeated page identities, configuration, target, artifacts-path, sdk-snapshot, runtime-reference and editor-reference. References must already exist. A supplied resolved SDK snapshot must match the requested properties and contain every selected example owner. Its caller maintains the stable execution boundary and verifies closing inputs; the graph alone does not certify freshness. Bound Runtime and Editor script manifests are compared with the actual prepared logical assemblies and their compiler-produced origins. A compiling example does not excuse a mismatched projected declaration.

**Parameter `cancellationToken`:** Cancels reading, SDK inspection or compilation before atomic report publication.

**Returns:** Zero when every selected example group compiles and every required script-reference comparison passes; one for failed compilation or comparison, missing prerequisites, missing explicit contexts or empty required example discovery. The report preserves each group's and reference's status.

**Exception `T:System.ArgumentException`:** Options are missing, duplicated or unknown, or a requested page does not exist.

**Exception `T:System.IO.IOException`:** Snapshot integrity, repository inventory or report publication fails.

**Exception `T:System.OperationCanceledException`:** Validation was canceled; no completed report replaces the previous result.
