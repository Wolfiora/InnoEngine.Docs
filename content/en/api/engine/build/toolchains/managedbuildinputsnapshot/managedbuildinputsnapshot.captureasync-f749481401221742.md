---
uid: api.f749481401221742d2d300ca2c4ed41d6839c4855d5c4175c4d4a50d952fdb78
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ManagedBuildInputSnapshot.CaptureAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.DotNetSdkDescriptor,System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Threading.CancellationToken)"
source: xml
reviewed: 8ed35dd485cd5532a568169939356de825ebcc597b2c61b7d1231649f2bdedcb
title: "ManagedBuildInputSnapshot.CaptureAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Evaluates an explicit managed graph using its frozen SDK and hashes its declared compilation inputs.

**Parameter `context`:** The borrowed operation that owns phase-local content reads and tool statistics.

**Parameter `sdk`:** The SDK already selected for this project; evaluation must use its exact CLI entry.

**Parameter `project`:** The existing entry project whose references define the managed source closure.

**Parameter `properties`:** The immutable compiler and product properties also passed to the actual managed build.

**Parameter `cancellationToken`:** Cancels SDK evaluation, drains its process and removes this operation's request directory.

**Returns:** A snapshot that can be freshly verified after waiting or executing; no Player compilation is performed.

## Remarks

Restore and evaluation use an owned SDK output layout, independently of ordinary IDE outputs. An explicit ArtifactsPath remains the caller's responsibility, including its concurrency protection.

**Exception `T:System.ArgumentNullException`:** A required operation, SDK or property collection is null.

**Exception `T:System.IO.FileNotFoundException`:** A required source, compiler, restored package input or SDK declaration is absent.

**Exception `T:System.IO.IOException`:** The source entry escapes the physical checkout or a filesystem alias cannot be resolved.

**Exception `T:System.InvalidOperationException`:** The selected SDK cannot evaluate the declared graph.

**Exception `T:System.OperationCanceledException`:** Evaluation or hashing was canceled.
