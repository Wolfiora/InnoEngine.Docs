---
title: Product build and publication tests
description: Verify real SDK composition, native publication, support packs and output ownership.
uid: project.inno-build-tests
kind: project
owners:
  - Inno.Build.Tests
---
# Product build and publication tests

`Inno.Build.Tests` owns integration among actual product composition, the SDK, native producers and publication. Its declared Editor native prerequisite is real. Use [the validation plan](../../validate-change.md) to prepare the selected target and deployment instead of relying on an accidental DLL in `bin/`.

The suite references the export feature and its presentation dependencies, rather than the complete Editor host. Console-only presentation changes therefore do not select all build integration tests through an unused host reference. Actual build, export, Native and publication inputs still select this suite through its evaluated dependencies and declared dynamic inputs.

## Choose the right owner

| Change | Relevant integration boundary |
| --- | --- |
| CLI admission or managed script command | [Command tests](inno-build-cli-tests.md) |
| Frozen inputs, neutral graphs or cache protocol | [Toolchain tests](inno-build-toolchains-tests.md) |
| Binding SDK generation and selection | [Binding tests](inno-build-bindings-tests.md) |
| Actual build, deployment or support-pack composition | This suite |
| Real warm native cost comparison | [Native cost tests](inno-build-nativeperformance-tests.md) |

Complete Editor script projections belong to the Editor Hosting test owner. This suite retains only the Editor Core, Interactions, Exporting and ImGui contracts its export workflows actually consume. A private Panel edit must not pull in all build tests merely through an unrelated complete Editor projection. Global architecture and documentation checks remain obligations of the plan, not repeated full-repository audits inside this suite.

## Composition and SDK ownership

Distribution tests freeze built-in hosts, target identities, capabilities and product closures, reject ambiguous registrations and support custom targets without host-specific branches. Provider composition is separate from packaging; missing or mismatched content-compiler components fail before work begins.

SDK cases preserve explicit child-only environment, arguments, selected toolchain, framework packs, NuGet target semantics and platform-qualified TFMs. Restore forwards exact properties and releases ownership on failure, rather than inheriting the invoking parent solution. Runtime packages and restored contents are checked by identity; RID, AOT and trimming inputs remain real restore requirements.

Solution bootstrap cases share one owner within an operation and create a new one for the next operation. Repeated claims in the live process succeed; exited-process claims cannot be reused. Clean and Build have separate process identities. A bounded real Editor Clean must not prepare Task runtime, compiled DLLs or native inputs.

## Native requests and incremental builds

Profiles reject foreign targets and freeze SDK arguments, ordered definitions, linkage, configuration and recipe-owned macros. Tool producers may share a source owner without requesting runtime bindings. Declared source roots and producer/target ownership are required even before generated output exists.

Binding selection does not recompile unrelated neutral projects. An unchanged selection preserves its import timestamp, while missing selections and changed generation bytes fail or invalidate the proper output. SDK restore precedes freezing extension inputs; fresh checks still run after actual generation. Isolated extension processes exit before their registered temporary roots are retired.

Workspace reuse distinguishes compatible inputs from changed recipes. Windows CMake cases exercise same-length, timestamp-preserving changes, unchanged object reuse and a later cache hit. Batch-cache cases verify complete hits, corrupt fallback and concurrency. Native cost measurements themselves remain in their dedicated owner.

## Publication and support packs

Consumer read protection delays replacement; canceling a wait preserves the pinned directory. Materialization rejects changes after the source snapshot and preserves the owned intermediate on cancellation. Shared Task builds yield while waiting, serialize writes, release failed ownership and keep private load directories isolated. Repeated runtime publication reuses verified bytes, while changed source, extra payload or tampering cannot replace a good generation.

Desktop publication first evaluates nonempty SDK `TargetPath` values against the complete relative layout. Current-host fixtures consume both WindowsX64 and MacOSArm64 templates, checking `.dll`/`.dylib` layout, a `PublishDir` without a trailing separator, exact file retention and missing-input rejection. This is a packaging contract, not foreign-platform execution evidence.

Support-pack preparation freezes actual managed inputs and native recipes. Concurrent requests prepare once; warm hits skip the producer. Corrupt or extra output is repaired, but input changes after waiting or during validation are rejected without replacing installed current content. Closure checks cover arbitrary backend groups, exact static archives and Browser object ABI. PE/Mach-O target rejection does not certify running the foreign product.

## Cleanup and process boundaries

Workspace aliases must not double-count files. Escaping, cyclic, dangling, directory and immutable-artifact links are rejected; Unix file links and Windows junctions retain their actual OS requirements. Busy aliases are never removed to force progress.

Retirement tests preserve cross-owner dependencies, active readers, protected parent artifacts, changed manifests, persistent locks and unregistered user directories. They cover cancellation, time budgets, changed protection roots after preview and invalid ownership. Protocol tests are not proof that every product workflow invokes automatic cleanup correctly.

Failed tools, canceled tools and output-capture failures terminate the owned process tree and preserve diagnostics. UI fixtures disable automatic `imgui.ini` writes and use their own explicit persistence roots rather than build output directories.

## Environment and evidence

Tests are scheduled serially to avoid concurrent SDK fixtures mutating a shared checkout. Individual race tests still create genuine contention, cancellation and concurrent publication. Windows compiler/sharing cases and Unix link cases keep compiled OS declarations; other-host non-applicability is never reported as a passing contract.

Inspect evaluated contexts, SDK output paths and deployment properties when diagnosing a case. Missing tools, native inputs or a required real window fail or block execution. Filters help diagnosis but cannot replace required owner evidence. Follow [suite maintenance](../../validate-change.md#extend-a-suite-safely).

[Browse the pinned product integration assertions](https://github.com/Wolfiora/InnoEngine/tree/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/build/Inno.Build.Tests). Separate actual Player/Web export, macOS native preparation, GUI, performance and device evidence remain necessary where selected.
