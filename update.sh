npx -y npm-check-updates@latest -u

cd apps
cd cms && npx -y npm-check-updates@latest -u && cd ..
cd docs && npx -y npm-check-updates@latest -u && cd ..
cd platform && npx -y npm-check-updates@latest -u && cd ../..

cd packages
cd cc3-design && npx -y npm-check-updates@latest -u && cd ..
cd cc3-tsconfig && npx -y npm-check-updates@latest -u && cd ..
cd eslint-config-cc3 && npx -y npm-check-updates@latest -u && cd ../..

echo "=> Done"
