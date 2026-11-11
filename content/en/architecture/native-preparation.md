---
title: Frozen Native preparation and deployment
description: Follow source, generated input and artifact ownership through cold and warm product preparation.
uid: architecture.native-preparation
kind: explanation
owners: [Inno.Build.Toolchains, Inno.Build.Bindings, Inno.Build.Tasks]
contracts: [project.inno-build-toolchains, project.inno-build-bindings, project.inno-build-tasks]
---
# Frozen Native preparation and deployment

Native preparation produces the exact component closure declared by a product. It separates an execution host, a selected target/toolchain, component recipes, generated bindings and consumers. Reuse is based on verified content identities, not a DLL filename, elapsed time or directory marker.

Start with [artifact ownership](build-artifacts.md) for the shared publication and reader protocol. This page follows the Native-specific stages.

## Freeze a declared product

A platform provider resolves absolute tools, SDK inputs, environment and ordered parameters. A component descriptor declares its Native, toolchain, binding and optional static-build owners; logical checkout paths are distinct from physical read locations. Component options include library kind, ordered CMake definitions and explicit output layout.

Recipes declare the actual execution-source closure through implementationPaths. Unselected platform code does not automatically enter a component identity. Shared executor, recipe, SDK, parameters and generated bridges still do. Browser aggregation includes its own aggregation implementation and inputs, not unrelated packaging/Support Pack code.

A recipe can be described before generated files exist. Before fingerprinting or producing, the operation must supply the actual generation: managed binding bytes, Native bridge bytes and generation identity enter the frozen execution request. Missing generation fails before staging.

The product prepares bindings as one batch for its selected target, then executes explicit component dependencies. Static/shared execution and link format are explicit capabilities. A pure C component need not invent a handwritten Native CMake source directory; a component that declares one must include its real inputs.

## Materialize stable compiler inputs

The cold producer copies frozen recipe inputs into its owned intermediate Sources tree, checking each planned hash. It does not hardlink mutable authoring source. A source edit-and-restore during compilation therefore cannot change the compiler's selected bytes.

Compatible workspaces retain unchanged file timestamps, atomically replace changed bytes and remove formerly owned inputs no longer selected. The workspace remains exclusively leased. Final artifacts are published separately by full input identity.

NativeCMakeExecutor runs inside the publisher's producer scope and reuses that scope's materialization. CMake source/include arguments resolve to declared copied inputs; external SDK and output owners remain explicit. A warm immutable-artifact hit does not copy sources or enter the cold producer.

Generated bridge paths use stable component-owned positions in the copied tree. A generation-cache directory name alone does not force a new compatible CMake workspace, but actual generated content, ABI, SDK, tool and configuration changes still invalidate the appropriate identity.

## Keep execution roots and SDKs honest

Windows short execution aliases follow the selected temporary root. The actual execution root participates in workspace identity because CMake retains absolute paths. Different temporary roots can share a verified final artifact while keeping separate compatible intermediates. Alias and execution locks are operation-owned and never enter immutable payloads.

DotNetSdkResolver resolves the caller's host to an absolute executable and selects its SDK from the original project context. The resulting Base Path and managed CLI entry remain fixed. Staging or a short alias does not select another SDK through PATH or rewrite global.json.

Child environments retain selected Native SDK settings while removing inherited IDE/MSBuild resolver roots that would redirect the chosen SDK. This does not mutate the parent environment. Removing an inherited variable differs from explicitly setting an empty value.

## Reuse without merging distinct requests

After a successful complete preparation, Build-lifetime reuse stores neutral data rather than plugin objects, delegates or active leases. Each subsequent consumer obtains its own protection, freshly verifies the current request after waiting and compares complete artifact membership/content. Different source, SDK, tool, target, configuration or recipe inputs cannot merge merely because they share a preparation lock.

The internal warm product path locks workspaces in canonical order, acquires the complete candidate readers and performs one new validation phase. Shared physical inputs are hashed once within that phase while logical component identities remain distinct. Missing or damaged candidates release the set and return to normal production. Earlier phase hashes do not replace lock-wait, post-build or publication freshness checks.

Backend bindDependencies transforms a recipe using actual dependency artifacts; the shared executor does not infer library names or link arguments. Aggregate static artifacts or unowned binding results cannot use a reuse path that requires registered readers.

## Preserve generated binding selection

The neutral descriptor records usesRuntimeImports independently from static/shared library kind. The selected initialization mode must match the generated contract. Product selection freezes component identities, source locations and link choices before managed compilation; it does not itself hold artifact reading protection.

MSBuild copies the single selected Bindings.cs into its own intermediate directory under the appropriate generation/read lease. The compiler consumes that owned copy. Identical bytes do not rewrite it; cancellation, missing source or a mismatched complete set fails without a partial copy.

Product Publish checks the selection actually used by managed compilation against its newly protected Native closure before deployment. A missing selection fails before Task-runtime preparation. A no-build publish must explicitly supply the original selection, never substitute the current generation.

## Deploy complete outputs

The product plan supplies an exact deployment layout. Content-identical deployment preserves existing loaded DLLs. Ordinary application installation atomically replaces through the existing directory protocol, retaining the previous complete output on pre-commit failure and reporting post-commit cleanup separately.

StageAsync is for an already exclusively owned unpublished candidate: its directory must exist and have no native subtree. It creates no second claim, lock or publication transaction inside that candidate. Failure or cancellation requires discarding the entire candidate; Support Pack publication owns the outer commit.

Hold the complete ProductNativeBuildResult through copying, compiling and linking. Disposal attempts all Native owners in reverse order and then binding results; failures are aggregated with any original build error. See [Task-host isolation](task-hosts.md) for private loading and [Support Packs](../contributing/support-packs.md) for protected downstream consumers.
