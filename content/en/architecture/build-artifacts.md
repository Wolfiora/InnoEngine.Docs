---
title: Build artifacts, caches and consumer protection
description: Understand frozen requests, immutable publication, independent consumers and safe cache retirement.
uid: architecture.build-artifacts
kind: explanation
aliases:
  - native cache
  - build cache
  - diagnose repeated native builds
owners:
  - Inno.Build.Toolchains
contracts:
  - architecture.ownership
---
# Build artifacts, caches and consumer protection

InnoEngine treats a reusable build artifact as verified output owned by a publisher. A directory that happens to contain a DLL is not sufficient evidence. Producers freeze requests, prepare and publish complete artifacts, and consumers retain independent reading protection for the whole period in which those artifacts are used.

This model lets warm builds reuse work while preserving freshness, cancellation and retirement guarantees. It also explains why a cache hit can still involve hashing: reuse must establish that the selected inputs and complete output set remain valid.

## Separate the four phases

| Phase | Established fact |
| --- | --- |
| Freeze the request | Recipe, tools, SDK, target, configuration and declared input contents identify the work. |
| Prepare and publish | The producer creates and validates a complete immutable output closure. |
| Acquire consumer protection | A consumer independently validates the selected closure and acquires its read leases. |
| Deploy or compile | The consumer uses protected outputs until copying, compilation, linking and deployment finish. |

Waiting for a lock is not proof that the request stayed unchanged. The producer verifies freshness after waiting, after tool execution and before publication. A cached hash from an earlier mutable-source phase cannot replace those checks.

Within one input-reading phase, overlapping physical files are hashed once while each component retains its own logical paths, ordering and recipe identity. Native snapshots use at most four independent readers. Failed or canceled reads drain before reporting the original failure; incomplete hashes are not registered as a finished batch.

## Reuse one frozen request without sharing a live owner

`ProductNativePreparation` converts successful protected output into neutral data for reuse inside one root MSBuild operation. The frozen identity includes the recipe, generator, source and SDK inputs.

A later consumer obtains its own leases. After waiting, it re-freezes the complete current request and verifies recorded directory membership and content hashes in a new reading phase. A miss returns control to normal preparation. It does not count as a passed build or test.

Neutral reuse data does not contain a plugin instance, delegate or long-lived runtime reference across private Task loading boundaries. Failed preparation, cancellation, deployment or release must not register a successful preparation.

## Keep the complete result alive

`ProductNativeBuildResult` owns native artifact leases and the corresponding binding-generation result. Retain it until every operation that consumes its files has finished. Extracting a path and immediately disposing the result creates an unprotected consumer.

The build context borrows generation descriptions. It does not take over the result's lifetime. Release attempts native owners in reverse order, then the bindings result. A failure in one release does not prevent attempts to release the others; failures are aggregated, and an original build failure is retained alongside cleanup failures.

Reading protection covers participants in this protocol. It cannot stop an unrelated application from editing a file directly, so acquiring a reusable artifact still verifies the actual bytes and file set.

## Distinguish native generation from platform selection

`NativeBindingCompilation` describes selected generated compilation inputs using neutral data. Source roots, relative files, lengths, SHA-256 identities and compile flags are explicit. Include directories retain ordering and system/framework search semantics.

The generator adapter converts generator-specific facts. A platform provider selects the real SDK. Shared tooling does not infer a platform from a component name or copy generator-specific types across that boundary.

User headers and generated sources are copied into the operation's frozen tree. System headers remain provided by the selected SDK. The consumer verifies the inputs before use. Unknown or missing required fields, invalid roots and escaping paths are rejected.

Translation-unit defines and compiler target facts have distinct meanings. Recorded target facts do not override the consumer compiler's built-in macros, and an upstream CMake target keeps its own configuration. Required exports and static table requirements describe link contracts; actual runtime symbols require checking the produced library.

`usesRuntimeImports` is a generator-provided initialization fact independent of library kind. A selection with the same fingerprint but incompatible initialization behavior is rejected.

## Evaluate managed inputs once per configuration

The managed graph capture batches projects in the selected SDK and uses the entry instances from that same `ProjectGraph`. Root properties, imports and output paths therefore come from one evaluation. Conditional references with different global properties remain distinct instances.

Graph capture returns evaluated inputs; it is not proof that compilation succeeded. Reference resolution is explicit and consumes properly restored inputs. It must not trigger reference builds through a project that re-enables `BuildProjectReferences` as a local property.

The input snapshot includes actual restored assets, package content, reference packs, source/resources, imports and compile options. Symbol preparation obtains the SDK's final symbols, including `NET10_0`, without executing product builds or Native targets. The SDK target inputs participate in the snapshot identity.

Different configurations and targets require their own captures. A missing reference cannot be repaired by substituting a DLL from another configuration or an unrelated SDK.

## Reuse a workspace while verifying each publication

`ManagedBuildInputSnapshot.CreateExecutionAsync` copies declared repository inputs into a protected workspace and checks planned hashes. Unchanged copied files retain timestamps for the compiler's incremental work; formerly owned inputs that are no longer declared are removed. The original inputs are still checked again at publication boundaries.

A reusable workspace is mutable work space, not an immutable artifact. Compiling successfully in it does not make every old file in that directory a valid output. Stable build paths support incremental compilation; separate run-log paths should not force a cold build.

Platform-qualified frameworks retain their complete target identity. Reference packs are selected through the SDK's framework model, not by stripping a directory suffix or borrowing another installed SDK's assemblies.

## Transport only immutable payloads

`NativeArtifactTransfer` exports registered, completely validated native and binding outputs while retaining reading protection. Archives contain payloads and manifests, not active leases, process IDs, absolute owner state or writable `obj` directories.

Import first validates the archive in a registered temporary owner: paths, complete membership and content hashes must agree. The real consumer revalidates the request before adopting a candidate and registering a local owner. Importing an archive is not test evidence.

Missing files, unexpected files, same-length tampering, links and escaping paths cannot be hidden by a cache hit. A genuine build failure remains a failure after cache recovery is attempted.

## Retire only what the registry owns

Publishers register physical roots, coordination leases, dependencies and current protection roots. Native, bindings, Support Pack, Task and build-tool publications participate in that graph. An unregistered directory does not acquire automatic deletion permission because it looks like a cache.

The three roles have different lifetimes:

- An immutable artifact's current root protects its deployed closure.
- A reusable workspace preference does not permanently pin an idle directory.
- A process workspace is protected by process identity, start time, production lease and actual dependencies.

Temporary claims are established before the first payload write. Process-use registration accumulates dependencies; a later registration cannot discard a host or workspace still needed by that operation.

Reusable workspaces may contain compiler-generated file aliases, such as Unix dynamic-library names. Each alias chain must remain in the same workspace and end at a regular file. Directory links, escaping links, cycles and dangling links are rejected. Immutable artifacts and process workspaces reject links entirely.

## Make cleanup resumable without persisting deletion permission

Maintenance can retain completed inventory shards identified by complete producer registration. Starting a new writer invalidates an old shard for that workspace. A changing active writer is not recorded as a completed size observation.

Inventory progress is neither an integrity certificate nor a retirement authorization. Every cleanup operation rereads owners, roots and dependencies; deletion rechecks ownership, file boundaries, locks and active readers. Inconsistent or incomplete protection relationships cannot authorize retirement.

A dry run reports the proposal without writing persistent inventory progress or deleting files. Cycles, missing registered dependencies, overlapping owners and path escape fail before deletion. Logical retired bytes and actual free disk space are separate measurements.

## Diagnose repeated work

Compare the actual frozen request, tool/SDK identities, input changes and output closure before blaming a cache miss. Separate time spent waiting for locks, hashing, preparing Native products, compiling managed code and running tests.

Repeated producer preparation for one identical request is different from independent consumers acquiring required protection. Large third-party compilation can legitimately take time; unexplained repeated preparation or a process with no meaningful progress deserves investigation.

Keep the original failing log and exact inputs. Do not delete active leases, create a marker file, replace a DLL or disable integrity checks to turn a failure into a hit.

## Related reading

- [Frozen Native preparation](native-preparation.md) follows compiler inputs, generated selection and exact deployment.
- [MSBuild Task-host isolation](task-hosts.md) separates bootstrap compilation, immutable runtimes and private process loading.

- [Ownership and lifetime](ownership.md) explains the shared resource model.
- [Platforms and products](../platforms/index.md) explains target-specific composition.
- [Local documentation queries](../contributing/documentation-queries.md) shows a lightweight tooling consumer with separate preparation and reading.
