npx npm-check-updates@latest -u

cd apps
cd cms && npx npm-check-updates@latest -u && cd ..
cd docs && npx npm-check-updates@latest -u && cd ../..

cd packages
cd cc3-design && npx npm-check-updates@latest -u && cd ..
cd cc3-tsconfig && npx npm-check-updates@latest -u && cd ..
cd eslint-config-cc3 && npx npm-check-updates@latest -u && cd ../..
