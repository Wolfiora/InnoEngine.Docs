# Script example receipt integration

The documentation candidate now binds engine source/tooling `4471fe4d341195c61d36ecaf858ff74466b7f892`, tree `797afce049f6f4fb1daffdd4a91bcd29347898de`. The [engine acceptance record](https://github.com/Wolfiora/InnoEngine/blob/4471fe4d341195c61d36ecaf858ff74466b7f892/.agents/records/acceptance/CI_43191512147.md) preserves the actual macOS failure and compiler-to-receipt regression.

The earlier full engine run completed 334 macOS checks and the product bundle, then failed because script reference identities used a different format from the CI receipt contract. Runtime and Editor references now retain separate canonical hashes of their actual compiler inputs. The regression exercises both real script compilation and the actual receipt reader, instead of testing their reports separately with handcrafted values.

The Architecture testing guide describes this boundary. Its prose passed 34 link/projection cases. Source declarations, executable examples, branding and the 2,533-page content organization are unchanged. Older API captures retain their original provenance; rebinding does not certify this new source tree.

Docs run 43210727247 at `96905368` passed 188 Node cases, ten archive scenarios, four candidate identity cases, production rendering and 72 browser journeys. The source-certification step correctly blocked the absence of protected matching evidence. Final matching engine acceptance and protected publication remain outstanding; this later candidate does not inherit a hosted pass merely from that preceding run.
