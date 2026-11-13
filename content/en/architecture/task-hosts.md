---
title: Isolate MSBuild Task hosts
description: Separate bootstrap compilation, immutable runtime publication and
  process-private loading.
uid: architecture.task-hosts
kind: explanation
owners:
  - Inno.Build.TaskHosting
  - Inno.Build.Tasks
contracts:
  - project.inno-build-taskhosting
  - project.inno-build-tasks
---
# Isolate MSBuild Task hosts

An MSBuild host can outlive one build and keep loaded assemblies locked. InnoEngine separates the lightweight publisher bootstrap, a verified immutable Task runtime and each process's private loading directory. Product outputs and long-lived build-host loading are different owners.

## Bootstrap without a dependency cycle

TaskHosting depends on Core IO, neutral Toolchains and MSBuild contracts, not the full Tasks library, BGCS, concrete backends or a distribution. The publisher can therefore prepare the runtime it will later load without loading that runtime first.

The initial Core IO build uses a neutral SDK scope. An explicit ArtifactsPath places it beneath that owner's .inno-task-foundation; ordinary preparation uses its fixed foundation scope. Configuration remains meaningful, while product TFM/RID/Browser/AOT/publication properties are removed. Temporary operation IDs do not split equivalent Foundation compilations that write one output.

The bootstrap consumes the SDK's actual returned assembly path and loads its bytes for the public owner protocol. It does not let a long-lived IDE host pin the ordinary Foundation output. Across private boundaries, exchange BCL values/Tasks rather than retaining Foundation objects or callbacks in a shared registry.

## Keep registration identity and compilation identity distinct

One solution/root build propagates a bootstrap owner through its reference closure. Equivalent dependencies reuse that compilation, but each loading boundary gets its own private directory. A later root build owns a new operation. Random ownership alone is not a content input; if a project uses it to change actual sources/defines/imports, those evaluated facts still affect the fingerprint.

An IDE can send a pre-evaluated ProjectInstance to a different worker. UsingTask registration may reevaluate there. The inline adapter captures the actual registration identity so publication and loading agree rather than assuming an earlier property survived unchanged.

Generator references retain their actual Roslyn-component role and neutral tool evaluation whether reached as analyzers, runtime references or transitive references. Tool configuration and explicit ArtifactsPath remain selected; product/publication properties do not leak into tool compilation.

## Restore and compile the selected closure

Owned Restore uses ExcludeRestorePackageImports=true; compilation uses false to consume restored package content. These are distinct evaluated input identities. Do not reuse pre-restore item sets for the runtime build or patch generated NuGet imports to hide missing inputs.

Private restore removes inherited solution/restore-entry metadata so it evaluates the requested project closure. This prevents a Windows Editor Task restore from accidentally requesting Browser workloads. The outer solution restore and ordinary analyzer reference context retain their appropriate roles.

Explicit auxiliary restore projects complete before compilation identity freezes. Compile, resources, analyzers, additional files, editor configuration and declared extra inputs all participate. Initial request capture can share work; verification after a lock wait and after compilation reads fresh content.

The shared workspace uses a Core IO write lease. Waiting yields the MSBuild node and reacquires it afterward, avoiding a consumer holding a worker while waiting for its own producer. Cancellation drains work and releases ownership. Private tool/workspace compilation disables build servers so another compiler process does not pin a generator DLL; this does not reconfigure ordinary IDE compilation globally.

## Publish once, load privately

Publication checks exact runtime membership and SHA-256 contents under the fingerprint lease, installs a complete staging candidate and registers its owner. Process-private loading directories borrow that immutable source. The SDK copy operation retains its normal unchanged-file and hardlink strategy under the Task lifecycle, not as an independently replayable product output.

Build-lifetime registry reuse contains neutral string-array metadata. Before reuse it verifies request inputs and actual output bytes. Failed/canceled preparation is never registered as success. Source, additional input, SDK or configuration changes and damaged outputs invalidate it.

Process-use records accumulate all host/workspace dependencies still needed by that operation, including a completed Restore that later projects will consume. Returning from a Task does not prematurely retire a process-owned dependency. Source snapshots retire only after all private readers release them and the snapshot lease permits it. Unknown process state or a still-loaded file remains protected.

## Materialize bindings through the lightweight boundary

MaterializeBindingsTask validates the selected generation and copies Bindings.cs into the SDK intermediate owner atomically. A target artifact uses a read lease; mutable HostSource retains the component generation owner. Identical content preserves timestamps. Failure/cancellation publishes no partial source.

The consumer yields its node while waiting and reacquires it on completion/cancellation. Host-source waits follow the build cancellation token, not an arbitrary short generation deadline. Even a node-reacquisition failure must release an acquired owner.

RegisterTaskPublisherTask records the actual publisher/load and bootstrap directories before first use, including builds that only materialize bindings. It verifies the actual loaded assembly location rather than claiming another task's directory.

Publisher reuse, runtime reuse and separate root invocations remain different costs. Measure each before concluding that the entire chain ran once. Read [Native preparation](native-preparation.md) and [build artifacts](build-artifacts.md) for downstream identities, publication and maintenance.
