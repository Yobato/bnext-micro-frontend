const Footer: React.FC = () => {
  return (
    <div>
      <span className="font-medium ml-2">
        <img
          src={`${process.env.NEXT_PUBLIC_ASSET_URL}/layout/images/footer.png`}
          width={50}
          height={12.5}
          alt="logo"
        />{" "}
        | 2024 © Bank Syariah Indonesia
      </span>
    </div>
  );
};

export default Footer;
