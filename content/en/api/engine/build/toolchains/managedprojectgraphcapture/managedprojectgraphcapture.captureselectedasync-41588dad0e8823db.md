---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.41588dad0e8823db91d140e815133c2d7185496fd306817eb68d22a5eb7b05d8
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ManagedProjectGraphCapture.CaptureSelectedAsync(System.String,Inno.Build.Toolchains.DotNetSdkDescriptor,System.Collections.Generic.IReadOnlyList{System.String},System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Threading.CancellationToken,System.Boolean)
title: ManagedProjectGraphCapture.CaptureSelectedAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 0855701e79751d9563d8154aa589587e989fb349669fdac0dfa0ed115511c7da
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `engineRoot`:** The checkout owning the evaluator and its temporary request.

**Parameter `sdk`:** The descriptor returned by DotNetSdkResolver for the evaluation owner and its current SDK inputs.

**Parameter `projects`:** Existing absolute project paths evaluated together with identical global properties.

**Parameter `properties`:** The complete evaluation properties, including configuration and any explicit output owner.

**Parameter `cancellationToken`:** Cancels preparation or evaluation and drains child processes before releasing owners.

**Parameter `resolveReferences`:** Resolves compile references and implicit symbols after restore without building project references or native products.

## Returns

A JSON array of SDK snapshots. An empty request or failed evaluation throws instead of returning partial evidence.

## Exceptions

**Exception `T:System.ArgumentException`:** No projects are supplied or a project path is not absolute.

**Exception `T:System.IO.FileNotFoundException`:** A project or selected SDK input is absent.

**Exception `T:System.OperationCanceledException`:** The caller cancels owned work.

**Exception `T:System.InvalidOperationException`:** Evaluator preparation or project evaluation fails.
